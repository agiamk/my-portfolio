import {
  createClient,
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

export type BlogType = {
  title: string;
  description: string;
  content: string;
  category: CategoryType;
  thumbnail?: MicroCMSImage;
} & MicroCMSListContent;

export type CategoryType = {
  name: string;
} & MicroCMSListContent;

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<BlogType>({
    endpoint: "blog",
    queries,
  });
  return listData;
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<BlogType>({
    endpoint: "blog",
    contentId,
    queries,
  });

  return detailData;
};
