import React from "react";
import { getBlogList } from "../_libs/microcms";
import BlogList from "../_components/BlogList";

const Page = async () => {
  const { contents: blogs } = await getBlogList();

  return <BlogList blogs={blogs} />;
};

export default Page;
