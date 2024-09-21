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
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      slidesPerView={4}
      spaceBetween={10}
    >
      {sliceBlogs.map((blog) => (
        <SwiperSlide key={blog.id} className="w-10 bg-slate-100 p-3">
          <Link href={`/blog/${blog.id}`}>
            <div>{blog.title}</div>
            <div>{blog.category.name}</div>
            <div>{formatDate(blog.publishedAt!)}</div>
            <div>Read More</div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSlide;
