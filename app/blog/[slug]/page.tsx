import Article from "@/app/_components/Article";
import { notFound } from "next/navigation";
import { getParsedBlogDetail } from "@/app/_libs/utils";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    draftkey?: string;
  };
};

const Page = async ({ params, searchParams }: Props) => {
  const data = await getParsedBlogDetail(params.slug, {
    draftKey: searchParams.draftkey,
  }).catch(notFound);
  return (
    <div>
      <Article blog={data} />
    </div>
  );
};

export default Page;
