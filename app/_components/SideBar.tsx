import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="max-md:hidden py-[70px] px-[30px] min-w-[310px]">
      <div className="flex flex-col gap-5">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src={`/icons/home.svg`} alt="home" width="24" height="24" />
            <p>Home</p>
          </div>
        </Link>
        <Link href="/search">
          <div className="flex items-center gap-2">
            <Image
              src={`/icons/search.svg`}
              alt="search"
              width="24"
              height="24"
            />
            <p>Search</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
