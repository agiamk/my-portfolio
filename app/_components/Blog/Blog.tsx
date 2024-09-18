"use client";
import "swiper/css";
import Sheet from "../Sheet";
import { Swiper, SwiperSlide } from "swiper/react";

const Blog = () => {
  const articles = ["fsdf", "fagfe", "agaerg"];

  return (
    <Sheet>
      <div className="flex justify-between">
        <h2 className="text-2xl">Tech Blog</h2>
        <div className="underline">ブログの一覧を見る</div>
      </div>
      <Swiper spaceBetween={60} scrollbar={{ draggable: true }}>
        {articles.map((article) => (
          <SwiperSlide key={article} className="w-32">
            {article}
          </SwiperSlide>
        ))}
      </Swiper>
    </Sheet>
  );
};

export default Blog;
