import { BLOG_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import React from "react";

type PaginationProps = {
  totalCount: number;
  current?: number;
};

const Pagination = ({ totalCount, current = 1 }: PaginationProps) => {
  const pages = Array.from(
    {
      length: Math.ceil(totalCount / BLOG_LIST_LIMIT),
    },
    (_, i) => i + 1
  );
  return (
    <nav className="mt-5">
      <ul className="flex justify-center items-center gap-2">
        {pages.map((p) => (
          <li key={p}>
            {current === p ? (
              <span className="bg-black text-white p-1 rounded-sm">{p}</span>
            ) : (
              <Link href={`/blog/p/${p}`}>{p}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
