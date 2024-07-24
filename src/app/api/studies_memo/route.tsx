import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function main() {
	try {
		await prisma.$connect();
	} catch (err) {
		return Error('DB接続に失敗しました');
	} finally {
	}
}

// Todo取得
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

export const POST = async (req: Request, res: NextResponse) => {
	try {
		const { title, description, duration } = await req.json();

		await main();
		const studies_memo = await prisma.study_memo.create({
			data: {
				title,
				description,
				duration: parseInt(duration, 10), // durationを数値に変換
			},
		});
		return NextResponse.json({ message: 'success', studies_memo }, { status: 201 });
	} catch (err) {
		return NextResponse.json({ message: 'Error', err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};
