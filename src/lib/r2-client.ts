import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Cloudflare R2 configuration
const R2_ENDPOINT_URL = process.env.R2_ENDPOINT_URL;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || 'pub';
const R2_PREFIX = 'kidou/';

// Initialize S3 client for R2
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `${R2_ENDPOINT_URL}`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID!,
    secretAccessKey: R2_SECRET_ACCESS_KEY!,
  },
});

export interface R2File {
  key: string;
  size: number;
  lastModified: Date;
  etag: string;
}

/**
 * List all objects in the R2 bucket with the specified prefix
 */
export async function listR2Objects(prefix: string = R2_PREFIX): Promise<R2File[]> {
  try {
    const command = new ListObjectsV2Command({
      Bucket: R2_BUCKET_NAME,
      Prefix: prefix,
    });

    const response = await r2Client.send(command);
    
    if (!response.Contents) {
      return [];
    }

    return response.Contents.map(obj => ({
      key: obj.Key!,
      size: obj.Size!,
      lastModified: obj.LastModified!,
      etag: obj.ETag!,
    }));
  } catch (error) {
    console.error('Error listing R2 objects:', error);
    throw error;
  }
}

/**
 * Get a public download URL for a specific object
 */
export async function getPublicDownloadUrl(key: string): Promise<string> {
  try {
    const command = new GetObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
    });

    // Generate a pre-signed URL that expires in 1 hour
    const signedUrl = await getSignedUrl(r2Client, command, { expiresIn: 3600 });
    return signedUrl;
  } catch (error) {
    console.error('Error generating download URL:', error);
    throw error;
  }
}

/**
 * Get a specific object from R2
 */
export async function getR2Object(key: string): Promise<Buffer> {
  try {
    const command = new GetObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
    });

    const response = await r2Client.send(command);
    
    if (!response.Body) {
      throw new Error('No body in response');
    }

    return Buffer.from(await response.Body.transformToByteArray());
  } catch (error) {
    console.error('Error getting R2 object:', error);
    throw error;
  }
}

/**
 * Extract version from filename
 * Expected format: Kidou-0.0.15-macOS-arm64.dmg
 */
export function extractVersionFromFilename(filename: string): string | null {
  const match = filename.match(/Kidou-(\d+\.\d+\.\d+)/);
  return match ? match[1] : null;
}

/**
 * Get build number from filename
 */
export function extractBuildNumber(filename: string): string {
  const match = filename.match(/Kidou-\d+\.\d+\.\d+-macOS-(\w+)/);
  if (match) {
    return match[1]; // Returns 'arm64' or 'x64'
  }
  return 'unknown';
}

/**
 * Get the latest version and download URLs from R2
 */
export async function getLatestKidouVersion(): Promise<{
  version: string;
  buildNumber: string;
  releaseDate: string;
  files: R2File[];
}> {
  try {
    const files = await listR2Objects();
    
    // Filter for DMG files
    const dmgFiles = files.filter(file => 
      file.key.includes('Kidou') && file.key.endsWith('.dmg')
    );

    if (dmgFiles.length === 0) {
      throw new Error('No DMG files found in R2 bucket');
    }

    // Sort by last modified date (newest first)
    dmgFiles.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

    // Find the latest version
    let latestVersion = '1.0.0';
    let latestBuildNumber = 'unknown';
    let latestReleaseDate = new Date().toISOString();

    for (const file of dmgFiles) {
      const version = extractVersionFromFilename(file.key);
      if (version) {
        latestVersion = version;
        latestBuildNumber = extractBuildNumber(file.key);
        latestReleaseDate = file.lastModified.toISOString();
        break;
      }
    }

    return {
      version: latestVersion,
      buildNumber: latestBuildNumber,
      releaseDate: latestReleaseDate,
      files: dmgFiles,
    };
  } catch (error) {
    console.error('Error getting latest Kidou version:', error);
    throw error;
  }
} 