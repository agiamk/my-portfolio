import { Blog } from "@/app/_libs/microcms";
import { formatDate } from "@/app/_libs/utils";
import Image from "next/image";
import Link from "next/link";

type BlogListProps = {
  blogs: Blog[];
};

const BlogList = ({ blogs }: BlogListProps) => {
  if (blogs.length == 0) <p>ブログが投稿されていません</p>;

  return (
    <div>
      {blogs.map((blog) => (
        <Link
          href={`/blog/${blog.id}`}
          key={blog.id}
          className="border block p-4 mt-4 max-w-xl mx-auto"
        >
          <div>
            <div className="text-lg font-semibold">{blog.title}</div>
            <div>{blog.description}</div>
            <div>
              <div>{blog.category.name}</div>
              <div>{formatDate(blog.updatedAt ?? blog.publishedAt)}</div>
            </div>
            {blog.thumbnail ? <Image src={blog.thumbnail.url} alt="" /> : null}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
