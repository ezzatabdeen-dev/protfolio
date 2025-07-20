import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

function getContentType(fileName) {
  if (fileName.endsWith('.svg')) return 'image/svg+xml';
  if (fileName.endsWith('.png')) return 'image/png';
  if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg')) return 'image/jpeg';
  if (fileName.endsWith('.webp')) return 'image/webp';
  return 'application/octet-stream';
}

export async function GET(request, context) {
  const { params } = context;
  const { imageName } = await params;


  const filePath = path.join(process.cwd(), "private/images", imageName);

  try {
    const fileBuffer = await fs.readFile(filePath);
    const contentType = getContentType(imageName);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'inline',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
