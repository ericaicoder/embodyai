export interface KidouVersion {
  success: boolean;
  version: string;
  buildNumber: string;
  releaseDate: string;
  timestamp: string;
  note?: string;
}

export interface KidouDownloadUrl {
  success: boolean;
  platform: string;
  downloadUrl: string;
  timestamp: string;
}

/**
 * Fetch the latest Kidou version information
 */
export async function getKidouVersion(): Promise<KidouVersion> {
  try {
    const response = await fetch('/api/kidou/version', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching Kidou version:', error);
    throw error;
  }
}

/**
 * Fetch the download URL for a specific platform
 */
export async function getKidouDownloadUrl(platform: 'macos-apple-silicon' | 'macos-intel'): Promise<KidouDownloadUrl> {
  try {
    const response = await fetch(`/api/kidou/download?platform=${platform}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching Kidou download URL:', error);
    throw error;
  }
}

/**
 * Get download URLs for both platforms
 */
export async function getKidouDownloadUrls(): Promise<{
  appleSilicon: string;
  intel: string;
}> {
  try {
    const [appleSiliconResponse, intelResponse] = await Promise.all([
      getKidouDownloadUrl('macos-apple-silicon'),
      getKidouDownloadUrl('macos-intel'),
    ]);

    return {
      appleSilicon: appleSiliconResponse.downloadUrl,
      intel: intelResponse.downloadUrl,
    };
  } catch (error) {
    console.error('Error fetching download URLs:', error);
    throw error;
  }
} 