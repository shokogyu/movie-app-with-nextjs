import Logo from "@/components/Sidebar/Logo";
import { useGenres } from "@/hooks/useFetchData";
import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { BiCameraMovie } from "@react-icons/all-files/bi/BiCameraMovie";
import { IconContext } from "@react-icons/all-files";
import { useRouter } from "next/router";
import SearchForm from "@/components/SearchForm";

function Sidebar() {
  const router = useRouter();
  const { data: genreList, error, isLoading } = useGenres();

  return (
    <div className="w-[15%] min-w-[200px] shrink-0 fixed top-0 left-0 pl-6 pr-4 py-6">
      <Logo />
      <SearchForm />

      <section className="mt-8">
        <div className="flex items-center gap-2">
          <IconContext.Provider value={{ className: "text-xl" }}>
            <AiOutlineHome />
          </IconContext.Provider>
          <Link href="/" className="text-base font-bold">
            ホーム
          </Link>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center gap-2">
          <IconContext.Provider value={{ className: "text-xl" }}>
            <BiCameraMovie />
          </IconContext.Provider>
          <span className="text-base font-bold">ジャンル</span>
        </div>
        <ul className="grid gap-1 pl-4 mt-2">
          {genreList?.genres.map((genre) => {
            return (
              <li
                key={genre.id}
                className="before:content-[''] before:bg-gray-600 before:w-3 before:h-[1px] before:block flex items-center text-gray-400 gap-2 hover:text-white cursor-pointer"
              >
                <Link
                  href={{
                    pathname: `/genre/${genre.id}`,
                    query: { name: genre.name },
                  }}
                  className={
                    router.asPath.startsWith(`/genre/${genre.id}`) ? "text-red-800 font-bold" : ""
                  }
                >
                  {genre.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
