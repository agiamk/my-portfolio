import Article from "@/app/_components/Article";
import { notFound } from "next/navigation";
import { getstyledBlogDetail } from "@/app/_libs/utils";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    draftkey?: string;
  }>;
};

const Page = async (props: Props) => {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getstyledBlogDetail(params.slug, {
    draftKey: searchParams?.draftkey,
  }).catch(notFound);

  return (
    <div>
      <Article blog={data} />
    </div>
  );
};

export default Page;

export const generateMetadata = async (props: Props) => {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getstyledBlogDetail(params.slug, {
    draftKey: searchParams?.draftkey,
  }).catch(notFound);

  return {
    title: data.title,
    description: `${data.title}のブログページです。`,
  };
};
