import { IconContext } from "@react-icons/all-files";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import Link from "next/link";

export const Home = () => {
  return (
    <section>
      <div className="flex items-center gap-2">
        <IconContext.Provider value={{ className: "text-xl" }}>
          <AiOutlineHome />
        </IconContext.Provider>
        <Link href="/" className="text-xs font-bold md:text-base">
          ホーム
        </Link>
      </div>
    </section>
  );
};
