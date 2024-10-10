import { CategoryType } from "@/app/_libs/microcms";

type CategoryProps = {
  category: CategoryType;
};

const Category = ({ category }: CategoryProps) => {
  return <p className="inline-block bg-slate-300 p-1">{category.name}</p>;
};

export default Category;
