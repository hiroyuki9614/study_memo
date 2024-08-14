"use server"
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

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
export const POST = async (req: Request, res: NextResponse) => {
	try {
		const { title, description, duration }: CreateStudyMemoRequest = await req.json();

		await main();
		const studies_memo = await prisma.study_memo.create({
			data: {
				title,
				description,
				duration,
			},
		});
		return NextResponse.json({ message: 'success', studies_memo }, { status: 201 });
	} catch (err) {
		console.error(err);
		return NextResponse.json({ message: 'Error', err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};
