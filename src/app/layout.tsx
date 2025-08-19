import React from 'react';
import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';

export const metadata: Metadata = {
  title: "Rommiate - Rommie's, conexiones y departamentos en un solo lugar",
  description: "Rommie's, conexiones y departamentos en un solo lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sp">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-nunito text-desktop-p md:text-mobile-p">{children}</body>
    </html>
  );
}
