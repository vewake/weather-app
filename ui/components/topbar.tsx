import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <Link href="/">
      <div
        className="w-full flex flex-row justify-between " >
        <div className="rounded-lg bg-gradient-to-t from-black/15 to-white/15 backdrop-blur-[100px]">
          <div className="text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-cyan-400">
            Weather App
          </div>
        </div>
        <div>
          <Image src="/search.svg" alt="search" width={50} height={50} className="" />
        </div>
      </div>
    </Link>

  );
}
