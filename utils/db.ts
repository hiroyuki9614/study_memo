import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function connectDB() {
	try {
		await prisma.$connect();
		console.log('DB接続に成功しました。');
	} catch (err) {
		return Error('DB接続に失敗しました');
	} finally {
	}
}