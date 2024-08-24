'use server';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
// import { ENDPOINT } from '@/constants';
import { connectDB } from '../../../../utils/db';

const prisma = new PrismaClient();

interface CreateStudyMemoRequest {
	title: string;
	description: string;
	duration: number;
}

// Study memo取得
export const GET = async (req: Request, res: NextResponse) => {
	try {
		await connectDB();
		const studies_memo = await prisma.study_memo.findMany();
		return NextResponse.json({ message: 'success', studies_memo }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ message: 'Error', err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};

// Study memo取得
export const POST = async (createPost: any) => {
	const duration = parseInt(createPost.get('duration') as string, 10);
	const title = createPost.get('title');
	const description = createPost.get('description');
	try {
		await connectDB();
		const studies_memo = await prisma.study_memo.create({
			data: {
				title,
				description,
				duration,
			},
		});
		revalidatePath('/');
		return { message: 'success', studies_memo };
	} catch (err) {
		console.error(err);
		return { error: '学習メモの作成に失敗しました' };
	} finally {
		await prisma.$disconnect();
	}
};
