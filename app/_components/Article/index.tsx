import { Blog } from "@/app/_libs/microcms";
import Button from "../Button";

type ArticleProps = {
  blog: Blog;
};

const Article = ({ blog }: ArticleProps) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      <div>
        <p>{blog.category.name}</p>
        <small>{blog.publishedAt ?? blog.createdAt}</small>
        <Button>ブログの一覧を見る</Button>
      </div>
    </main>
  );
};

export default Article;
