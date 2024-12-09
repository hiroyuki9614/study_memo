import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/app/page';
import 'whatwg-fetch';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () =>
			Promise.resolve({
				studies_memo: [], // APIレスポンス形式に合わせる
			}),
	})
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
