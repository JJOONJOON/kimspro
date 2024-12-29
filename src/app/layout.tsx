import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kim's Poker Room in Seoul Korea",
  description: 'Korean poker information and tips for foreigners',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
