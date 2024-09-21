import { Blog } from "@/app/_libs/microcms";

type BlogListType = {
  blogs: Blog[];
};

const BlogList = ({ blogs }: BlogListType) => {
  return <div>BlogList</div>;
};

export default BlogList;
