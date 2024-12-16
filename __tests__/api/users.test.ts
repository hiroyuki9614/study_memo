import { testApiHandler } from 'next-test-api-route-handler'; // ◄ Must be first import
// Import the handler under test from the app directory
import * as appHandler from '../../src/app/api/api';

it('does what I want', async () => {
	await testApiHandler({
		appHandler,
		// requestPatcher is optional
		requestPatcher(request) {
			request.headers.set('key', process.env.SPECIAL_TOKEN);
		},
		// responsePatcher is optional
		async responsePatcher(response) {
			const json = await response.json();
			return Response.json(json.apiSuccess ? { hello: 'world!' } : { goodbye: 'cruel world' });
		},
		async test({ fetch }) {
			const res = await fetch({ method: 'POST', body: 'dummy-data' });
			await expect(res.json()).resolves.toStrictEqual({ hello: 'world!' }); // ◄ Passes!
		},
	});
});
