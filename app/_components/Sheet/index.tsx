type SheetProps = {
  children: React.ReactNode;
};

const Sheet = ({ children }: SheetProps) => {
  return (
    <section>
      <div className="mx-auto px-7 py-5 md:container">{children}</div>
    </section>
  );
};

export default Sheet;
