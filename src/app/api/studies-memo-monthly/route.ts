import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { connectDB } from '../../../../utils/db';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const prisma = new PrismaClient();

// 月ごとのデータを取得する
export const GET = async (req: Request, res: NextResponse) => {
	try {
		await connectDB();
		const url = new URL(req.url);
		const startDate = url.searchParams.get('startDate');
		const endDate = url.searchParams.get('endDate');
		const studies_memo = await prisma.study_memo.findMany({
			where: {
				created_at: {
					gte: dayjs(startDate).toDate(),
					lt: dayjs(endDate).toDate(),
				},
			},
		});
		return NextResponse.json({ message: 'success', studies_memo }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ message: 'Error', err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};
