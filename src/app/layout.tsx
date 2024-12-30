import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "seoul holdem tip",
  description: "seoul holdem tip - 首尔扑克联谊会聚会",
  keywords: [
    "holdem seoul",
    "gangnam holdem",
    "korea holdem tip",
    "首尔扑克联谊会聚会",
  ],
  openGraph: {
    title: "seoul holdem tip",
    description: "seoul holdem tip -首尔扑克联谊会聚会",
    url: "https://kimspro.vercel.app/",
    type: "website",
  },
  alternates: {
    canonical: "https://kimspro.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 폰트 같은 링크는 직접 삽입해도 됩니다 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
