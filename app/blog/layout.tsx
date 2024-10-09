import React from "react";
import Sheet from "../_components/Sheet";
import Header from "../_components/Header";

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
