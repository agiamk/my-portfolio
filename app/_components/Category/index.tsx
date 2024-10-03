import { CategoryType } from "@/app/_libs/microcms";

type CategoryProps = {
  category: CategoryType;
};

const Category = ({ category }: CategoryProps) => {
  return <p className="bg-slate-300 p-1 inline-block">{category.name}</p>;
};

export default Category;
