import React from "react";

type SheetProps = {
  children: React.ReactNode;
  bgBlack?: boolean;
};

const Sheet = ({ children, bgBlack = false }: SheetProps) => {
  return (
    <section className={`${bgBlack && `bg-black text-white`}`}>
      <div className="px-4 md:container mx-auto">{children}</div>
    </section>
  );
};

export default Sheet;
