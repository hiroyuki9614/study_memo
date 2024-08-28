import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FooterNav from './component/ui/footer-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'hiroyuki9614の学習記録',
	description: 'ただただhiroyuki9614が学習を記録するためのWEBアプリです。',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ja'>
			<body className={inter.className}>
				<main className='pb-16'>
					{children}
					<FooterNav />
				</main>
			</body>
		</html>
	);
}
