import { BLOG_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import React from "react";

type PaginationProps = {
  totalCount: number;
};

const Pagination = ({ totalCount }: PaginationProps) => {
  const pages = Array.from(
    {
      length: Math.ceil(totalCount / BLOG_LIST_LIMIT),
    },
    (_, i) => i + 1
  );
  console.log(pages);
  return (
    <nav className="text-center mt-5">
      <ul>
        {pages.map((p) => (
          <li key={p}>
            <Link href={`/blog/p/${p}`}>{p}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
