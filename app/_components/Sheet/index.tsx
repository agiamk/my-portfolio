import React from "react";

type SheetProps = {
  children: React.ReactNode;
};

const Sheet = ({ children }: SheetProps) => {
  return <div className="px-4 md:container mx-auto">{children}</div>;
};

export default Sheet;
