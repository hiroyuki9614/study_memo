import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/app/page';
import 'whatwg-fetch';

global.fetch = jest.fn().mockImplementation(() =>
	Promise.resolve({
		headers: new Headers(),
		ok: true,
		redirected: false,
		status: 200,
		statusText: 'OK',
		type: 'basic',
		url: '',
		json: () => Promise.resolve({ studies_memo: [] }),
	} as Response)
);

afterEach(() => {
	jest.restoreAllMocks();
});

describe('Home Component', () => {
	it('should render year headings', async () => {
		const HomeComponent = await Home();
		render(HomeComponent);
		expect(screen.getByText('2024年の学習内容')).toBeInTheDocument();
		expect(screen.getByText('2023年の学習内容')).toBeInTheDocument();
	});
});

const outOfRange = (num) => {
	if (!(typeof num === 'number')) return true;
	if (Math.round(num) != num) return true;
	if (num < 1) return true;

	return false;
};
