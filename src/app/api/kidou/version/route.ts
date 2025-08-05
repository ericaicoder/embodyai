import { NextRequest, NextResponse } from 'next/server';
import { getLatestKidouVersion } from '@/lib/r2-client';

export async function GET(request: NextRequest) {
  try {
    const versionInfo = await getLatestKidouVersion();

    return NextResponse.json({
      success: true,
      version: versionInfo.version,
      buildNumber: versionInfo.buildNumber,
      releaseDate: versionInfo.releaseDate,
      downloadUrls: versionInfo.downloadUrls,
      timestamp: new Date().toISOString(),
      note: `Found ${versionInfo.files.length} DMG files in R2 bucket`
    });

  } catch (error) {
    console.error('Error getting version info:', error);
    
    // Return default version info on error
    return NextResponse.json({
      success: true,
      version: '1.0.0',
      buildNumber: '1',
      releaseDate: new Date().toISOString(),
      downloadUrls: {
        'macos-apple-silicon': 'https://8e5cfe29add1b0bcab4a4ba85161f859.r2.cloudflarestorage.com/pub/kidou/Kidou-1.0.0-macOS-arm64.dmg',
        'macos-intel': 'https://8e5cfe29add1b0bcab4a4ba85161f859.r2.cloudflarestorage.com/pub/kidou/Kidou-1.0.0-macOS-x64.dmg'
      },
      timestamp: new Date().toISOString(),
      note: 'Using default version info due to error'
    });
  }
} 