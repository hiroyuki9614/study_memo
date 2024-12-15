import axios from 'axios';
import { fetchData } from '../../src/app/api/api';

// axios.get を手動でモックに設定
axios.get = jest.fn();

describe('fetchData', () => {
	it('fetches successfully data from an API', async () => {
		// mockを準備
		const data = { data: 'some data' };
		(axios.get as jest.Mock).mockResolvedValue({ data });

		await expect(fetchData('https://example.com')).resolves.toEqual(data);
	});

	it('fetches erroneously data from an API', async () => {
		// mockを準備
		const errorMessage = 'Network Error';
		(axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

		await expect(fetchData('https://example.com')).rejects.toThrow(errorMessage);
	});
});
