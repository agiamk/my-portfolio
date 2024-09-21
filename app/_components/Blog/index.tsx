import "swiper/css/virtual";
import Sheet from "../Sheet";
import BlogSlide from "../BlogSlide";
import { TOP_blog_LIMIT } from "@/app/_constants";
import { getBlogList } from "@/app/_libs/microcms";

const Blog = async () => {
  const { contents: blogs } = await getBlogList({
    limit: TOP_blog_LIMIT,
  });

  return (
    <Sheet>
      <div className="flex justify-between">
        <h2 className="text-2xl">Tech Blog</h2>
        <div className="underline">ブログの一覧を見る</div>
      </div>
      <BlogSlide blogs={blogs} />
    </Sheet>
  );
};

export default Blog;
