import { NextRequest, NextResponse } from 'next/server';
import { listR2Objects, getPublicDownloadUrl } from '@/lib/r2-client';

/**
 * Find the latest DMG file for a specific platform
 */
async function findLatestDmgFile(platform: 'macos-apple-silicon' | 'macos-intel'): Promise<string> {
  try {
    const files = await listR2Objects();
    
    // Filter for DMG files
    const dmgFiles = files.filter(file => 
      file.key.includes('Kidou') && file.key.endsWith('.dmg')
    );

    if (dmgFiles.length === 0) {
      throw new Error('No DMG files found in R2 bucket');
    }

    // Sort files by last modified date (newest first)
    dmgFiles.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

    // Find the latest file for the specific platform
    const platformKeyword = platform === 'macos-apple-silicon' ? 'arm64' : 'x64';
    
    for (const file of dmgFiles) {
      if (file.key.includes(platformKeyword)) {
        return await getPublicDownloadUrl(file.key);
      }
    }

    // If no platform-specific file found, use the most recent DMG file
    if (dmgFiles.length > 0) {
      return await getPublicDownloadUrl(dmgFiles[0].key);
    }

    throw new Error(`No ${platform} DMG file found in R2 bucket`);

  } catch (error) {
    console.error('Error finding DMG file:', error);
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get the platform from query parameters (macos-apple-silicon or macos-intel)
    const { searchParams } = new URL(request.url);
    const platform = searchParams.get('platform');

    if (!platform) {
      return NextResponse.json(
        { error: 'Platform parameter is required. Use "macos-apple-silicon" or "macos-intel"' },
        { status: 400 }
      );
    }

    // Validate platform parameter
    if (!['macos-apple-silicon', 'macos-intel'].includes(platform)) {
      return NextResponse.json(
        { error: 'Invalid platform. Supported platforms: macos-apple-silicon, macos-intel' },
        { status: 400 }
      );
    }

    // Find the latest DMG file for the requested platform
    const downloadUrl = await findLatestDmgFile(platform as 'macos-apple-silicon' | 'macos-intel');

    // Return the download URL
    return NextResponse.json({
      success: true,
      platform,
      downloadUrl,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error getting download URL:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 