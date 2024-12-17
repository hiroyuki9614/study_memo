import { testApiHandler } from 'next-test-api-route-handler';
import * as appHandler from '@/app/api/studies-memo/route';
import { prismaMock } from '../../mocks/prisma';

describe('Study Memo API', () => {
	const mockStudyMemo = {
		id: 1,
		title: 'テスト学習',
		description: '説明',
		duration: 60,
		category: 'プログラミング',
		created_at: new Date(),
		updated_at: new Date(),
	};

	beforeEach(() => {
		// Prismaのモック
		prismaMock.study_memo.findMany.mockResolvedValue([mockStudyMemo]);
	});

	describe('GET', () => {
		it('学習メモの一覧を取得できる', async () => {
			await testApiHandler({
				appHandler,
				test: async ({ fetch }) => {
					const res = await fetch();
					expect(res.status).toBe(200);

					const data = await res.json();
					expect(data).toHaveProperty('studies_memo');
					expect(data.message).toBe('success');
				},
			});
		});
	});

	describe('POST', () => {
		it('有効なデータで学習メモを作成できる', async () => {
			prismaMock.study_memo.create.mockResolvedValue(mockStudyMemo);

			const formData = new FormData();
			formData.append('title', 'テスト学習');
			formData.append('description', '説明');
			formData.append('duration', '60');
			formData.append('category', 'プログラミング');
			formData.append('password', 'correct-password'); // 正しいパスワード

			await testApiHandler({
				appHandler,
				test: async ({ fetch }) => {
					const res = await fetch({
						method: 'POST',
						body: formData,
					});

					const data = await res.json();
					expect(data).toHaveProperty('studies_memo');
					expect(data.message).toBe('success');
				},
			});
		});

		it('無効なパスワードでエラーを返す', async () => {
			const formData = new FormData();
			formData.append('title', 'テスト学習');
			formData.append('description', '説明');
			formData.append('duration', '60');
			formData.append('category', 'プログラミング');
			formData.append('password', 'wrong-password');

			await testApiHandler({
				appHandler,
				test: async ({ fetch }) => {
					const res = await fetch({
						method: 'POST',
						body: formData,
					});

					const data = await res.json();
					expect(data).toHaveProperty('error', '無効なパスワードです');
				},
			});
		});

		it('必須項目が欠けているとエラーを返す', async () => {
			const formData = new FormData();
			formData.append('title', 'テスト学習');
			// descriptionを意図的に省略

			await testApiHandler({
				appHandler,
				test: async ({ fetch }) => {
					const res = await fetch({
						method: 'POST',
						body: formData,
					});

					const data = await res.json();
					expect(data).toHaveProperty('error', '必須項目が入力されていません');
				},
			});
		});
	});
});
