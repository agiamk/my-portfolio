import type { Metadata } from "next";
import "./globals.css";
import { notoSansJp } from "@/fonts";
import Sheet from "./_components/Sheet";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <Sheet>{children}</Sheet>
      </body>
    </html>
  );
}
