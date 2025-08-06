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
      timestamp: new Date().toISOString(),
      note: `Found ${versionInfo.files.length} DMG files in R2 bucket`
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