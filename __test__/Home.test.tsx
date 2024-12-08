import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/app/page';

describe('Header Component', () => {
	it('should render page text', () => {
		render(<Home />);
		expect(screen.getByText('Hello Next.js')).toBeInTheDocument();
	});
});
