import "swiper/css/virtual";
import Sheet from "../Sheet";
import BlogList from "../BlogList";
import { TOP_blog_LIMIT } from "@/app/_constants";
import { getBlogList } from "@/app/_libs/microcms";

const Blog = async () => {
  const data = await getBlogList({
    limit: TOP_blog_LIMIT,
  });

  const blogs = data.contents;

  return (
    <Sheet>
      <div className="flex justify-between">
        <h2 className="text-2xl">Tech Blog</h2>
        <div className="underline">ブログの一覧を見る</div>
      </div>
      <BlogList blogs={blogs} />
    </Sheet>
  );
};

export default Blog;
