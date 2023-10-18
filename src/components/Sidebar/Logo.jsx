import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <h1 className="font-mono font-black text-transparent text-3xl tracking-wider bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text ">
        MOVIE APP
      </h1>
    </Link>
  );
}

export default Logo;
