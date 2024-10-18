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

  $("code").each((_, elm) => {
    $(elm).addClass("hljs");
  });

  $("h2").addClass(
    "text-2xl font-bold border-gray-600 p-2 pl-4 mt-14 mb-6 bg-slate-200",
  );
  $("h2 + *").addClass("mt-12");
  $("h3").addClass(
    "text-xl font-bold border-gray-600 border-l-4 pl-4 mt-12 mb-5",
  );
  $("h3 + *").addClass("mt-10");
  $("h4").addClass("font-bold text-lg mt-12 mb-4");
  $("p").addClass("mt-4 mb-2");
  $("a").addClass("underline hover:text-purple-800");
  $("ul").addClass("pt-4 mt-7");
  $("ul + *").addClass("mt-7");
  $("li > ul").addClass("pt-0");
  $("li").addClass("list-disc ml-8");
  $("li").addClass("list-disc ml-8");
  $("li + *").addClass("mt-3");
  $("a[target=_blank]").append(
    "<span class='w-4 h-4 inline-block ml-1 align-middle'><img src='/otherWindow.svg' alt='別窓で開く'></span>",
  );
  $("strong").addClass("text-gray-500");
  $("div[data-filename]").addClass("mt-7");
  $("table").addClass("mt-7 border-collapse border-slate-500");
  $("th").addClass("border border-slate-500 bg-slate-300 p-4");
  $("th p:first-child").addClass("mt-4 mb-2");
  $("td").addClass("border border-slate-500 p-3");
  $("td p:first-child").removeClass("mt-4 mb-2");
  $(".iframely-embed").addClass("mt-7");

  // 編集したHTMLを再設定
  detailBlog.content = $.html();
  return detailBlog;
};
