import { IconContext } from "@react-icons/all-files";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import Link from "next/link";

export const MyList = () => {
  return (
    <section>
      <div className="flex items-center gap-2">
        <IconContext.Provider value={{ className: "text-xl" }}>
          <AiOutlineHeart />
        </IconContext.Provider>
        <Link href="/mylist" className="text-xs font-bold md:text-base">
          Myリスト
        </Link>
      </div>
    </section>
  );
};
