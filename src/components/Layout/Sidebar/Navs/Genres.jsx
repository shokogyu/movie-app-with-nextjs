import { IconContext } from "@react-icons/all-files";
import { BiCameraMovie } from "@react-icons/all-files/bi/BiCameraMovie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Genres = (props) => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setActive(!active);
  };

  // スマホ用スタイル
  const toggleVisibleClass = active ? "opacity-100 visible" : "opacity-0 invisible";

  return (
    <section>
      <div className="flex items-center gap-2" onClick={handleToggle}>
        <IconContext.Provider value={{ className: "text-xl" }}>
          <BiCameraMovie />
        </IconContext.Provider>
        <span className="text-xs font-bold md:text-base">ジャンル</span>
      </div>
      <div
        className={`${toggleVisibleClass} absolute bottom-[var(--nav-height-sp)] left-0 h-[calc(100vh-var(--nav-height-sp))] w-screen bg-[#09090b]/50 px-6 py-7 backdrop-blur-md transition-all md:visible md:static md:h-auto md:w-auto md:bg-inherit md:p-0 md:opacity-100 md:backdrop-blur-none`}
      >
        <ul className="grid h-full space-y-4 overflow-y-auto pb-5 pl-4 md:mt-2 md:space-y-1">
          {props.genreListData.genres.map((genre) => {
            const isActive = router.asPath.startsWith(`/genre/${genre.id}`) ? true : false;
            return (
              <li
                key={genre.id}
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-400 before:block before:h-px before:w-3 before:bg-gray-600 before:content-[''] hover:text-white md:text-base"
                onClick={handleToggle}
              >
                <Link
                  href={{
                    pathname: `/genre/${genre.id}`,
                    query: { name: genre.name },
                  }}
                  className={isActive ? "font-bold text-red-800" : ""}
                >
                  {genre.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
