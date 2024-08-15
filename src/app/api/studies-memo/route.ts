"use server"
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
// import { ENDPOINT } from '@/constants';

const prisma = new PrismaClient();

interface CreateStudyMemoRequest {
	title: string;
	description: string;
	duration: number; // フロントエンドから文字列として送信される可能性があるため
}

export async function main() {
	try {
		await prisma.$connect();
		console.log('DB接続に成功しました。');
	} catch (err) {
		return Error('DB接続に失敗しました');
	} finally {
	}
}

// Study memo取得
export const GET = async (req: Request, res: NextResponse) => {
	try {
		await main();
		const studies_memo = await prisma.study_memo.findMany();
		return NextResponse.json({ message: 'success', studies_memo }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ message: 'Error', err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};

// Study memo取得
export const createPost = async (createPost: any) => {
	const duration = parseInt(createPost.get('duration') as string, 10);
	const title = createPost.get('title');
	const description = createPost.get('description');
	console.log(duration, title);
	try {
		await main();
		const studies_memo = await prisma.study_memo.create({
			data: {
				title,
				description,
				duration,
			},
		});
		return { message: 'success', studies_memo };
	} catch (err) {
		console.error(err);
		return { error: '学習メモの作成に失敗しました' };
	} finally {
		await prisma.$disconnect();
	}
};