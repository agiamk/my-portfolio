import type { Metadata } from "next";
import { notoSansJp } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ポートフォリオサイト",
  description: "鎌田 大河のブログ兼ポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} text-sm md:text-base`}>
        {children}
      </body>
    </html>
  );
}
