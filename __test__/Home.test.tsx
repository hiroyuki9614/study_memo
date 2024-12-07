import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/app/page';

describe('Header Component', () => {
	it('should render header text', () => {
		render(<Header />);
		const headerElement = screen.getByRole('heading');
		expect(headerElement).toBeInTheDocument();
	});
});
