import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className=" relative text-center bg-gray-900 py-8 mt-5 mb-9 rounded-md ">
        <Link href="/">
          <Image
            src="/logo.png"
            width={45}
            height={45}
            className="my-0 mx-auto"
            alt={"logo"}
          />
        </Link>
        <h1 className="text-2xl text-white font-bold mt-4">Valy's Blog</h1>
        <p className="text-slate-300 mt-1">🤟 Welcome to my blog. 💻</p>

        <div className=" absolute py-1 flex  items-center  justify-center">
          {/* home button */}
          <Link href="/">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow    text-sm m-3">
              Home
            </button>
          </Link>

          {/* about button */}
          <Link href="/about">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow   text-sm ">
              About
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
