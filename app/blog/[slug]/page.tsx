import Article from "@/app/_components/Article";
import { notFound } from "next/navigation";
import { getstyledBlogDetail } from "@/app/_libs/utils";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    draftkey?: string;
  };
};

const Page = async ({ params, searchParams }: Props) => {
  const data = await getstyledBlogDetail(params.slug, {
    draftKey: searchParams?.draftkey,
  }).catch(notFound);

  return (
    <div>
      <Article blog={data!} />
    </div>
  );
};

export default Page;

export const generateMetadata = async ({ params, searchParams }: Props) => {
  const data = await getstyledBlogDetail(params.slug, {
    draftKey: searchParams?.draftkey,
  }).catch(notFound);

  return {
    title: data.title,
    description: `${data.title}のブログページです。`,
  };
};
