import { useRouter } from "next/router";
import { useCallback, useState } from "react";

function SearchForm() {
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
        />
        <button
          className="bg-red-800 rounded px-2 py-1 text-sm hover:opacity-90 transition-all"
          onClick={() => handleClick()}
        >
          検索
        </button>
      </div>
    </section>
  );
}

export default SearchForm;
