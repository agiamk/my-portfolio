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
          className="mx-auto mt-4 block max-w-xl border p-4"
        >
          <div>
            <div className="text-lg font-semibold">{blog.title}</div>
            <div className="mt-2">{blog.description}</div>
            <div className="mt-2 flex items-center gap-2">
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
