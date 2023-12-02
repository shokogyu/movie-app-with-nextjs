import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-center font-mono text-2xl font-black tracking-wider text-transparent md:text-left md:text-3xl ">
        MOVIE APP
      </h1>
    </Link>
  );
};
