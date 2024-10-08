import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { getBlogDetail } from "./microcms";
import hljs, { HighlightResult } from "highlight.js";
import { load } from "cheerio";
import { MicroCMSQueries } from "microcms-js-sdk";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
};

export const getstyledBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailBlog = await getBlogDetail(contentId, queries);

  const $ = load(detailBlog.content);

  $("div[data-filename]").each((_, elm) => {
    $(elm).prepend(`<span>${$(elm).attr("data-filename")}</span>`);
  });

  //preタグのなかのcodeタグのコンテンツを取得し、ハイライト表示させる
  $("pre code").each((_, elm) => {
    //MicroCMSで使用言語を入力するとcodeタグに自動付与されるクラス名を取得。
    const language = $(elm).attr("class") || "";
    let result: HighlightResult;

    if (language == "") {
      // 言語が入力なしの場合、言語を自動判定
      result = hljs.highlightAuto($(elm).text());
    } else {
      // 言語が入力ありの場合、入力された言語で判定
      result = hljs.highlight($(elm).text(), {
        language: language.replace("language-", ""),
      });
    }
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  $("h2").addClass(
    "text-2xl font-bold border-gray-600 p-2 pl-4 mt-7 mb-6 bg-slate-200",
  );
  $("h3").addClass(
    "text-xl font-bold border-gray-600 border-l-4 pl-4 mt-6 mb-5",
  );
  $("h4").addClass("font-bold text-lg mt-5 mb-4");
  $("a").addClass("underline hover:text-purple-800");
  $("li").addClass("list-disc ml-8");
  $(".newWindowLink").append(
    "<span class='w-4 h-4 inline-block ml-1 align-middle'><img src='/otherWindow.svg' alt='別窓で開く'></span>",
  );
  // 編集したHTMLを再設定
  detailBlog.content = $.html();
  return detailBlog;
};
