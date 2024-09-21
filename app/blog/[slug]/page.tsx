import { getBlogDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const data = await getBlogDetail(params.slug).catch(notFound);
  return <Article blog={data} />;
};

export default Page;
