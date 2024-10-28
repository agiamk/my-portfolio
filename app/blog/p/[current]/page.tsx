import BlogList from "@/app/_components/BlogList";
import Pagination from "@/app/_components/Pagination";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
import { getBlogList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    current: string;
  }>;
};

const Page = async (props: Props) => {
  const params = await props.params;
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
      <h1 className="text-center text-2xl font-bold">Tech Blog</h1>
      <div className="pt-4">
        <BlogList blogs={blogs} />
        <Pagination totalCount={totalCount} current={current} />
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const { contents: blogs } = await getBlogList();

  const staticPaths = blogs.map((blog) => ({ id: blog.id }));

  return staticPaths;
}

export default Page;
