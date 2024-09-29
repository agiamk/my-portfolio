"use client";

import { Blog } from "@/app/_libs/microcms";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { formatDate } from "@/app/_libs/utils";
import Link from "next/link";

type blogListProps = {
  blogs: Blog[];
};

const BlogSlide = ({ blogs }: blogListProps) => {
  if (blogs.length === 0) <p>記事がありません。</p>;

  const sliceBlogs = blogs.slice(0, 5);

  return (
    <div className="m-4">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={10}
      >
        {sliceBlogs.map((blog) => (
          <SwiperSlide
            key={blog.id}
            className="bg-slate-100 flex-col"
            style={{
              height: "auto",
              display: "flex",
            }} //swiperライブラリのheightが優先されるためインラインで記述
          >
            <Link
              href={`/blog/${blog.id}`}
              className="cursor-pointer p-3 block"
            >
              <div className="break-normal">{blog.title}</div>
              <div className="flex mt-2">
                <div className="text-xs">{blog.category.name}</div>
                <div className="text-xs">{formatDate(blog.publishedAt!)}</div>
              </div>
              <div className="mt-auto text-right">Read More</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlide;
