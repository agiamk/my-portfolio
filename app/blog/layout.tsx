import type { Metadata } from "next";
import Header from "../_components/Header";
import Sheet from "../_components/Sheet";

export const metadata: Metadata = {
  title: "ブログ一覧",
  description: "ブログ一覧ページです",
};

type blogLayoutProps = {
  children: React.ReactNode;
};

const blogLayout = ({ children }: blogLayoutProps) => {
  return (
    <>
      <Header />
      <Sheet>{children}</Sheet>
    </>
  );
};

export const revalidate = 600;

export default blogLayout;
