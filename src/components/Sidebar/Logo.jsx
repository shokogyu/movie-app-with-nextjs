import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text font-mono text-3xl font-black tracking-wider text-transparent ">
        MOVIE APP
      </h1>
    </Link>
  );
};
