import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export const SearchForm = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleChange = useCallback((newVal) => {
    setKeyword(newVal);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      router.push({
        pathname: "/search",
        query: { keyword },
      });
    },
    [keyword, router]
  );

  return (
    <section className="mt-3 md:mt-10">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-1 md:flex-col">
          <input
            type="text"
            placeholder="検索キーワードを入力"
            className="w-9/12 rounded p-2 text-xs md:w-auto text-gray-900 md:p-2 md:text-sm"
            value={keyword}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button
            type="submit"
            className="flex-1 rounded bg-red-800 px-4 py-2 text-xs transition-all hover:opacity-90 md:px-2 md:py-1 md:text-sm"
          >
            検索
          </button>
        </div>
      </form>
    </section>
  );
};
