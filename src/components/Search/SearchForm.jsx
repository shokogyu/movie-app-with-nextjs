import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export const SearchForm = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleChange = useCallback((newVal) => {
    setKeyword(newVal);
  }, []);

  const handleClick = useCallback(() => {
    router.push({
      pathname: "/search",
      query: { keyword: keyword },
    });
  }, [keyword]);

  return (
    <section className="mt-10">
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="検索キーワードを入力"
          className="rounded p-2 text-sm text-gray-900"
          onChange={(e) => handleChange(e.target.value)}
          //   onKeyDown={() => handleClick()}
        />
        <button
          className="rounded bg-red-800 px-2 py-1 text-sm transition-all hover:opacity-90"
          onClick={() => handleClick()}
        >
          検索
        </button>
      </div>
    </section>
  );
};
