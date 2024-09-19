import "swiper/css/virtual";
import Sheet from "../Sheet";
import BlogList from "../BlogList";

const Blog = () => {
  const blogs = [
    {
      id: "1",
      title: "最初の投稿",
      category: {
        name: "アクセシビリティ",
      },
      published: "2024/09/19",
      cratedAt: "2024/09/19",
    },
    {
      id: "2",
      title: "2番目の投稿",
      category: {
        name: "アクセシビリティ",
      },
      published: "2024/09/19",
      cratedAt: "2024/09/19",
    },
    {
      id: "3",
      title: "3番目の投稿",
      category: {
        name: "アクセシビリティ",
      },
      published: "2024/09/19",
      cratedAt: "2024/09/19",
    },
    {
      id: "4",
      title: "4番目の投稿",
      category: {
        name: "アクセシビリティ",
      },
      published: "2024/09/19",
      cratedAt: "2024/09/19",
    },
    {
      id: "5",
      title: "5番目の投稿",
      category: {
        name: "アクセシビリティ",
      },
      published: "2024/09/19",
      cratedAt: "2024/09/19",
    },
    {
      id: "6",
      title: "6番目の投稿",
      category: {
        name: "アクセシビリティ",
      },
      published: "2024/09/19",
      cratedAt: "2024/09/19",
    },
  ];

  return (
    <Sheet>
      <div className="flex justify-between">
        <h2 className="text-2xl">Tech Blog</h2>
        <div className="underline">ブログの一覧を見る</div>
      </div>
      <BlogList blogs={blogs} />
    </Sheet>
  );
};

export default Blog;
