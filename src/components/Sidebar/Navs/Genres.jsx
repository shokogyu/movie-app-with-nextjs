import { IconContext } from "@react-icons/all-files";
import { BiCameraMovie } from "@react-icons/all-files/bi/BiCameraMovie";
import Link from "next/link";
import { useRouter } from "next/router";

export const Genres = (props) => {
  const router = useRouter();

  return (
    <section>
      <div className="flex items-center gap-2">
        <IconContext.Provider value={{ className: "text-xl" }}>
          <BiCameraMovie />
        </IconContext.Provider>
        <span className="text-base font-bold">ジャンル</span>
      </div>
      <ul className="mt-2 grid gap-1 pl-4">
        {props.genreListData.genres.map((genre) => {
          const isActive = router.asPath.startsWith(`/genre/${genre.id}`) ? true : false;
          return (
            <li
              key={genre.id}
              className="flex cursor-pointer items-center gap-2 text-gray-400 before:block before:h-px before:w-3 before:bg-gray-600 before:content-[''] hover:text-white"
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
    </section>
  );
};
