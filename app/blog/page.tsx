import { getBlogList } from "../_libs/microcms";
import { BLOG_LIST_LIMIT } from "../_constants";
import BlogList from "../_components/BlogList";
import Pagination from "../_components/Pagination";
import SearchField from "../_components/SearchField";
import { Suspense } from "react";

const Page = async () => {
  const { contents: blogs, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <Suspense>
      <div>
        <h1 className="text-center text-2xl font-bold">Tech Blog</h1>
        <div className="pt-4">
          <SearchField />
          <BlogList blogs={blogs} />
          <Pagination totalCount={totalCount} />
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
