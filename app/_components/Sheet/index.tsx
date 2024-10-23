type SheetProps = {
  children: React.ReactNode;
  bgBlack?: boolean;
};

const Sheet = ({ children, bgBlack = false }: SheetProps) => {
  return (
    <section className={`${bgBlack && `bg-black text-white`}`}>
      <div className="mx-auto px-7 py-5 md:container">{children}</div>
    </section>
  );
};

export default Sheet;
