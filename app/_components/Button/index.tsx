import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <Link href="/blog" className="underline">
      {children}
    </Link>
  );
};

export default Button;
