'use server';

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { connectDB } from '../../../../utils/db';
import bcrypt from 'bcrypt';

const CORRECT_PASSWORD_HASH = '$2a$08$o6AUk6t8MyHa8fttDRBCvO2g5b8wWSFwm3iXpoNDdT5dZ5TCiMOVK';

const prisma = new PrismaClient();

interface CreateStudyMemoRequest {
	title: string;
	description: string;
	duration: number;
	category: string;
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
export const POST = async (req: NextRequest) => {
	const formData = await req.formData();
	const duration = parseInt(formData.get('duration')?.toString() || '0', 10);
	const title = formData.get('title')?.toString() || '';
	const description = formData.get('description')?.toString() || '';
	const category = formData.get('category')?.toString() || '';
	const password = formData.get('password')?.toString() || '';
	const isValidPassword = await bcrypt.compare(password, CORRECT_PASSWORD_HASH);
	if (!title || !description || !duration || !category || !password) {
		return { error: '必須項目が入力されていません' };
	}
	try {
		if (isValidPassword) {
			await connectDB();
			const newStudyMemo = await prisma.study_memo.create({
				data: {
					title,
					description,
					duration,
					category,
				},
			});
			revalidatePath('/');
			return { message: 'success', studies_memo: newStudyMemo };
		} else {
			return { error: '無効なパスワードです' };
		}
	} catch (err) {
		console.error(err);
		return { error: '学習メモの作成に失敗しました' };
	} finally {
		await prisma.$disconnect();
	}
};
