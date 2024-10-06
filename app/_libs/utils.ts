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

export const getParsedBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
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

  // 編集したHTMLを再設定
  detailBlog.content = $.html();
  return detailBlog;
};
