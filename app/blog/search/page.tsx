import BlogList from "@/app/_components/BlogList";
import SearchField from "@/app/_components/SearchField";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
import { getBlogList } from "@/app/_libs/microcms";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

const Page = async ({ searchParams }: Props) => {
  const { contents: blogs } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    q: (await searchParams).q,
  });

  return (
    <>
      <SearchField />
      {blogs.length > 0 ? (
        <BlogList blogs={blogs} />
      ) : (
        <h1 className="mt-4 text-3xl">ページが見つかりませんでした。</h1>
      )}
    </>
  );
};

export default Page;
