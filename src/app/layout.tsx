'use client'; // حدد أن هذا مكون يعمل على العميل

import { Provider } from 'react-redux';
import { Geist, Geist_Mono } from 'next/font/google';
import { store } from '../redux/store'; // استيراد الـ store
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}> {/* Wrap the children with the Redux provider */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
