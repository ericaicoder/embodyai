import { NextRequest, NextResponse } from 'next/server';
import { getLatestKidouVersion } from '@/lib/r2-client';
import { releaseNotes } from '@/kidou/release';

export async function GET(request: NextRequest) {
  try {
    const versionInfo = await getLatestKidouVersion();
    
    // Get release notes from local file
    const localReleaseNotes = releaseNotes[versionInfo.version as keyof typeof releaseNotes] || '';

    return NextResponse.json({
      success: true,
      version: versionInfo.version,
      buildNumber: versionInfo.buildNumber,
      releaseDate: versionInfo.releaseDate,
      releaseUrl: "https://embodyai.co.jp/kidou/releases",
      timestamp: new Date().toISOString(),
      note: localReleaseNotes
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