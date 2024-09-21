"use client";

import { Blog } from "@/app/_libs/microcms";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type blogListProps = {
  blogs: Blog[];
};

const BlogList = ({ blogs }: blogListProps) => {
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
          <div>{blog.title}</div>
          <div>{blog.category.name}</div>
          <div>{blog.publishedAt}</div>
          <div>Read More</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogList;
