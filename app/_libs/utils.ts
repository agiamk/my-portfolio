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
      //言語を指定しないhighlightAutoを使うとと以下のエラーが発生する。正規表現周りだが細かい原因不明。
      //SyntaxError: Invalid regular expression: /0[oO](([0-7]_*)+)/mu: Invalid escape
      return;
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

  $("a[target=_blank]").append(
    "<span><img src='/otherWindow.svg' alt='別窓で開く'></span>",
  );

  // 編集したHTMLを再設定
  detailBlog.content = $.html();
  return detailBlog;
};
