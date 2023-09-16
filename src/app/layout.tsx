import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import ReduxProvider from '@/redux/Providers';
import { PropsWithChildren } from 'react';

const roboto = Roboto({
	weight: ['300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Laurus 777',
	description: 'Tienda de ropa de jean para hombres',
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='es'>
			<body className={roboto.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
