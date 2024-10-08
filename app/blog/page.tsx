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
      <h1 className="text-center text-2xl font-bold">Tech Blog</h1>
      <div className="pt-4">
        <BlogList blogs={blogs} />
        <Pagination totalCount={totalCount} />
      </div>
    </div>
  );
};

export default Page;
