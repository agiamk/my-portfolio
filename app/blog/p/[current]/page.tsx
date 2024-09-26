import BlogList from "@/app/_components/BlogList";
import Pagination from "@/app/_components/Pagination";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
import { getBlogList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    current: string;
  };
};

const Page = async ({ params }: Props) => {
  const current = parseInt(params.current, 10);

  if (isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: blogs, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    offset: BLOG_LIST_LIMIT * (current - 1),
  });

  return (
    <div>
      <BlogList blogs={blogs} />
      <Pagination totalCount={totalCount} />
    </div>
  );
};

export default Page;
