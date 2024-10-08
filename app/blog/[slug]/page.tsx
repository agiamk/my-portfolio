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
    draftKey: searchParams.draftkey,
  }).catch(notFound);

  return (
    <div>
      <Article blog={data} />
    </div>
  );
};

// export async function generateStaticParams() {
//   const { contents: blogs } = await getBlogList({});

//   const staticPaths = blogs.map((blog) => ({ id: blog.id }));

//   return staticPaths;
// }

export default Page;
