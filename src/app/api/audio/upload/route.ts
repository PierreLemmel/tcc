import { NextRequest, NextResponse } from 'next/server';
import { adminStorage } from '@/lib/firebase-admin';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        const maxSize = 100 * 1024 * 1024; // 100MB
        if (file.size > maxSize) {
            return NextResponse.json(
                { error: 'File size exceeds maximum allowed size (100MB)' },
                { status: 400 }
            );
        }


        const buffer = Buffer.from(await file.arrayBuffer());
        
        const timestamp = Date.now();
        const fileName = `${timestamp}_${file.name}`;
        

        const bucket = adminStorage.bucket();
        const fileRef = bucket.file(`tres-chair-corps/${fileName}`);
        
        
        await fileRef.save(buffer, {
            metadata: {
                contentType: file.type,
                metadata: {
                    originalName: file.name,
                    uploadedAt: new Date().toISOString(),
                }
            }
        });

        const [url] = await fileRef.getSignedUrl({
            action: 'read',
            expires: '03-01-2500',
        });

        return NextResponse.json({
            success: true,
            fileId: fileName,
            fileName: file.name,
            downloadUrl: url,
            message: 'File uploaded successfully to Firebase Storage',
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'Failed to upload file' },
            { status: 500 }
        );
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
