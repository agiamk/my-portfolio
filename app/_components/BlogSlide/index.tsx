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
        //swiperのスタイルが優先されるためインラインで記述
        style={{
          paddingBottom: "40px",
        }}
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
            className="flex-col bg-slate-100"
            style={{
              height: "auto",
              display: "flex",
            }} //swiperライブラリのスタイルが優先されるためインラインで記述
          >
            <Link
              href={`/blog/${blog.id}`}
              className="inline-block h-full cursor-pointer break-words p-3"
            >
              <p className="line-clamp-3">{blog.title}</p>
              <div className="mt-2 flex">
                <p className="relative pr-2 text-xs after:absolute after:right-0 after:top-0 after:h-full after:border-r-2 after:border-r-indigo-100">
                  {blog.category.name}
                </p>
                <time
                  className="pl-1 text-xs"
                  dateTime={formatDate(
                    blog.updatedAt ?? blog.publishedAt,
                  ).replaceAll("/", "-")}
                >
                  {formatDate(blog.updatedAt ?? blog.publishedAt)}
                </time>
              </div>
              <p className="mt-auto text-right">Read More</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlide;
