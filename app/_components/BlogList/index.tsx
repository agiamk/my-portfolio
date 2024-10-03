import { BlogType } from "@/app/_libs/microcms";
import { formatDate } from "@/app/_libs/utils";
import Image from "next/image";
import Link from "next/link";
import Category from "../Category";

type BlogListProps = {
  blogs: BlogType[];
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
            <div className="mt-2">{blog.description}</div>
            <div className="flex items-center gap-2 mt-2">
              <Category category={blog.category} />
              <div>
                最終更新：{formatDate(blog.updatedAt ?? blog.publishedAt)}
              </div>
            </div>
            {blog.thumbnail ? <Image src={blog.thumbnail.url} alt="" /> : null}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
