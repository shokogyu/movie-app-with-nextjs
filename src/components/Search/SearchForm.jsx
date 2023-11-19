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
    <section className="mt-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="検索キーワードを入力"
            className="rounded p-2 text-sm text-gray-900"
            value={keyword}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button
            type="submit"
            className="rounded bg-red-800 px-2 py-1 text-sm transition-all hover:opacity-90"
          >
            検索
          </button>
        </div>
      </form>
    </section>
  );
};
