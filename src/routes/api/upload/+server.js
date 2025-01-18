import { writeFile } from 'fs/promises';
import path from 'path';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return new Response(JSON.stringify({ message: '파일이 없습니다.' }), { status: 400 });
        }

        const buffer = await file.arrayBuffer();
        const filePath = path.join(process.cwd(), 'uploads', file.name);

        // `uploads` 디렉토리에 저장
        await writeFile(filePath, Buffer.from(buffer));

        return new Response(
            JSON.stringify({ message: file.name }),
            { status: 200 }
        );
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ message: '업로드 실패' }), { status: 500 });
    }
}