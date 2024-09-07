import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { connectDB } from '../../../../../utils/db';

const prisma = new PrismaClient();

interface CreateStudyMemoRequest {
	title: string;
	description: string;
	duration: number;
	category: string;
}

// Study memo Read取得
export const GET = async (req: Request, { params }: { params: { id: string } }) => {
	try {
		await connectDB();
		const post = await prisma.study_memo.findUnique({
			where: {
				id: Number(params?.id),
			},
		});
		return NextResponse.json({ message: 'success', post }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ message: 'Error', err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};

export const UPDATE = async (req: Request, { params }: { params: { id: string } }) => {
	try {
		await connectDB();
		const post = await prisma.study_memo.findUnique({
			where: {
				id: Number(params?.id),
			},
		});
		return NextResponse.json({ message: 'success', post }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ message: 'Error', err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
	try {
		await connectDB();
		const post = await prisma.study_memo.delete({
			where: {
				id: Number(params?.id),
			},
		});
		return NextResponse.json({ message: 'success', post }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ message: 'Error', err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};
