import { createMocks } from 'node-mocks-http';
import handler from './users.page';

describe('/api/users', () => {
	test('returns a list of users', async () => {
		const { req, res } = createMocks({
			method: 'GET',
		});

		const response = await handler(req);

		expect(response.status).toBe(200);
		expect(await response.json()).toEqual([
			{ id: 1, name: 'Alice' },
			{ id: 2, name: 'Bob' },
		]);
	});
});
