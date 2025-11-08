import { adminStorage } from "@/lib/firebase-admin";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    if (!process.env.NEXT_PUBLIC_ALLOW_ADMIN) {
        return NextResponse.json({
            message: 'Unauthorized' },
            { status: 403 }
        );
    }

    const folder = 'tres-chair-corps';
    const bucket = adminStorage.bucket();
    
    try {
        const [files] = await bucket.getFiles({
            prefix: folder,
        });

        
        const fileList = await Promise.all( files
            .filter(file => file.name.endsWith('.wav'))
            .map(async file => {


                const [url] = await file.getSignedUrl({
                    action: 'read',
                    expires: '03-01-2500',
                });

                return ({
                    name: file.name,
                    size: file.metadata.size,
                    contentType: file.metadata.contentType,
                    timeCreated: file.metadata.timeCreated,
                    updated: file.metadata.updated,
                    downloadURL: url
                });
            }));

        return NextResponse.json({
            folder: folder,
            count: fileList.length,
            files: fileList
        });
    } catch (error) {
        console.error('Error listing files:', error);
        return NextResponse.json({
            message: 'Error listing files',
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}