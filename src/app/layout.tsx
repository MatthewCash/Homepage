import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Coming Soon',
    description: 'Website under construction'
};

export default ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);
