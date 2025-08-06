import { NextRequest, NextResponse } from 'next/server';
import { releaseInfo } from '@/kidou/release';

export async function GET(request: NextRequest) {
  try {
    // Get all versions from releaseInfo and sort them to find the latest
    const versions = Object.keys(releaseInfo).sort((a, b) => {
      const aParts = a.split('.').map(Number);
      const bParts = b.split('.').map(Number);
      
      for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
        const aPart = aParts[i] || 0;
        const bPart = bParts[i] || 0;
        
        if (aPart !== bPart) {
          return bPart - aPart; // Descending order (latest first)
        }
      }
      return 0;
    });

    const latestVersion = versions[0];
    const latestReleaseInfo = releaseInfo[latestVersion as keyof typeof releaseInfo];

    return NextResponse.json({
      success: true,
      version: latestVersion,
      buildNumber: "latest", // Since we're not using R2 data
      releaseDate: latestReleaseInfo.releaseDate,
      releaseUrl: latestReleaseInfo.releaseUrl,
      timestamp: new Date().toISOString(),
      note: latestReleaseInfo.releaseNotes
    });

  } catch (error) {
    console.error('Error getting version info:', error);
    
    // Return default version info on error
    return NextResponse.json({
      success: false,
      message: 'Error getting version info'
    });
  }
} 