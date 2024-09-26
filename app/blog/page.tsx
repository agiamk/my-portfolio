import React from "react";
import { getBlogList } from "../_libs/microcms";
import BlogList from "../_components/BlogList";
import { BLOG_LIST_LIMIT } from "../_constants";
import Pagination from "../_components/Pagination";

const Page = async () => {
  const { contents: blogs, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <div>
      <BlogList blogs={blogs} />
      <Pagination totalCount={totalCount} />
    </div>
  );
};

export default Page;
