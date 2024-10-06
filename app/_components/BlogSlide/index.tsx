"use client";

import { BlogType } from "@/app/_libs/microcms";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { formatDate } from "@/app/_libs/utils";
import Link from "next/link";

type blogListProps = {
  blogs: BlogType[];
};

const BlogSlide = ({ blogs }: blogListProps) => {
  if (blogs.length === 0) <p>記事がありません。</p>;

  return (
    <div className="m-4">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          460: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide
            key={blog.id}
            className="bg-slate-100 flex-col"
            style={{
              height: "auto",
              display: "flex",
            }} //swiperライブラリのスタイルが優先されるためインラインで記述
          >
            <Link
              href={`/blog/${blog.id}`}
              className="cursor-pointer p-3 block break-words"
            >
              <div>{blog.title}</div>
              <div className="flex mt-2">
                <div className="text-xs relative pr-2 after:absolute after:border-r-2 after:top-0 after:right-0 after:border-r-indigo-100 after:h-full">
                  {blog.category.name}
                </div>
                <div className="text-xs pl-1">
                  {formatDate(blog.publishedAt!)}
                </div>
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
