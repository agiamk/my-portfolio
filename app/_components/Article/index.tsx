import { BlogType } from "@/app/_libs/microcms";
import Button from "../Button";
import { formatDate } from "@/app/_libs/utils";
import Category from "../Category";

type ArticleProps = {
  blog: BlogType;
};

const Article = ({ blog }: ArticleProps) => {
  return (
    <main>
      <div className="flex gap-4 justify-end items-center">
        <Category category={blog.category} />
        <time>
          最終更新日：{formatDate(blog.publishedAt ?? blog.createdAt)}
        </time>
      </div>
      <h1 className="text-2xl mt-2">{blog.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="mt-2"
      ></div>
      <div className="text-center mt-4">
        <Button>ブログの一覧を見る</Button>
      </div>
    </main>
  );
};

export default Article;
