"use client";

import { BlogType } from "@/app/_libs/microcms";
import Button from "../Button";
import { formatDate } from "@/app/_libs/utils";
import Category from "../Category";
import "highlight.js/styles/a11y-dark.css";
import { useEffect, useState } from "react";

type ArticleProps = {
  blog: BlogType;
};

const Article = ({ blog }: ArticleProps) => {
  const [content, setContent] = useState<string>();

  //microcmsの外部サイト埋め込み機能を使うためのscriptを読み込む
  useEffect(() => {
    setContent(blog.content);

    const script = document.createElement("script");
    script.src = "//cdn.iframe.ly/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <div className="flex items-center justify-end gap-4">
        <Category category={blog.category} />
        <time>
          最終更新日：{formatDate(blog.updatedAt ?? blog.publishedAt)}
        </time>
      </div>
      <h1 className="mt-4 text-2xl font-bold">{blog.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content! }}
        className="mt-4"
      ></div>
      <div className="mt-4 text-center">
        <Button>ブログの一覧を見る</Button>
      </div>
    </main>
  );
};

export default Article;
