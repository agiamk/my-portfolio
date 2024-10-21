"use client";

import Button from "../Button";
import { formatDate, getstyledBlogDetail } from "@/app/_libs/utils";
import Category from "../Category";
import "highlight.js/styles/a11y-dark.css";
import { useEffect, useState } from "react";
import { BlogType } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type ArticleProps = {
  blogId: string;
  draftKey?: string;
};

const Article = ({ blogId, draftKey }: ArticleProps) => {
  const [blog, setBlog] = useState<BlogType | null>(null);

  useEffect(() => {
    //microcmsの外部サイト埋め込み機能を使うためのscriptを読み込む
    const script = document.createElement("script");
    script.src = "//cdn.iframe.ly/embed.js";
    script.async = true;
    document.body.appendChild(script);

    //ブログデータを取得
    const getData = async () => {
      const _data = await getstyledBlogDetail(blogId, {
        draftKey,
      }).catch(notFound);
      if (_data) {
        setBlog(_data);
      }
    };
    getData();

    return () => {
      document.body.removeChild(script);
    };
  }, [blogId, draftKey]);

  return (
    <main>
      <div className="flex items-center justify-end gap-4">
        <Category category={blog!.category} />
        <time>
          最終更新日：{formatDate(blog!.updatedAt ?? blog!.publishedAt)}
        </time>
      </div>
      <h1 className="mt-4 text-2xl font-bold">{blog!.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: blog!.content }}
        className="mt-4"
      ></div>
      <div className="mt-4 text-center">
        <Button>ブログの一覧を見る</Button>
      </div>
    </main>
  );
};

export default Article;
