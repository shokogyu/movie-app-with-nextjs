import { useGenres } from "@/hooks/useFetchData";
import { IconContext } from "@react-icons/all-files";
import { BiCameraMovie } from "@react-icons/all-files/bi/BiCameraMovie";
import Link from "next/link";
import { useRouter } from "next/router";

export const Genre = () => {
  const router = useRouter();
  const { data, error, isLoading } = useGenres();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      <div className="flex items-center gap-2">
        <IconContext.Provider value={{ className: "text-xl" }}>
          <BiCameraMovie />
        </IconContext.Provider>
        <span className="text-base font-bold">ジャンル</span>
      </div>
      <ul className="grid gap-1 pl-4 mt-2">
        {data?.genres.map((genre) => {
          const isActive = router.asPath.startsWith(`/genre/${genre.id}`) ? true : false;
          return (
            <li
              key={genre.id}
              className="before:content-[''] before:bg-gray-600 before:w-3 before:h-px before:block flex items-center text-gray-400 gap-2 hover:text-white cursor-pointer"
            >
              <Link
                href={{
                  pathname: `/genre/${genre.id}`,
                  query: { name: genre.name },
                }}
                className={isActive ? "text-red-800 font-bold" : ""}
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
