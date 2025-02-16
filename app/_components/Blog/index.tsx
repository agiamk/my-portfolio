import "swiper/css/virtual";
import Sheet from "../Sheet";
import BlogSlide from "../BlogSlide";
import { TOP_blog_LIMIT } from "@/app/_constants";
import { getBlogList } from "@/app/_libs/microcms";
import Button from "../Button";

const Blog = async () => {
  const { contents: blogs } = await getBlogList({
    limit: TOP_blog_LIMIT,
  });

  return (
    <Sheet>
      <div>
        <h2
          id="Blog"
          className="mb-6 border-gray-600 bg-slate-200 p-2 pl-4 text-2xl font-bold"
        >
          Tech Blog
        </h2>
        <div className="text-right">
          <Button>ブログの一覧を見る</Button>
        </div>
      </div>
      {blogs.length === 0 ? (
        <p>記事はありません</p>
      ) : (
        <BlogSlide blogs={blogs} />
      )}
    </Sheet>
  );
};

export default Blog;
