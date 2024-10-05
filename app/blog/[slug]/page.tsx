import Article from "@/app/_components/Article";
import { notFound } from "next/navigation";
import { getparsedBlogDetail } from "@/app/_libs/utils";

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const data = await getparsedBlogDetail(params.slug).catch(notFound);
  return (
    <div>
      <Article blog={data} />
    </div>
  );
};

export default Page;
