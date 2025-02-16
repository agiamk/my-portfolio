"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SearchField = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/blog/search?${params.toString()}`);
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <form onSubmit={handleSubmit} className="">
        <label>
          <input
            type="search"
            name="q"
            defaultValue={searchParams.get("q") ?? undefined}
            placeholder="キーワードを入力"
            className="border border-slate-300 p-1"
            aria-label="コンテンツを検索する"
          />
        </label>
      </form>
    </div>
  );
};

export default SearchField;
