import Image from "next/image";
import React from "react";
import RowAlbum from "./RowAlbum";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <nav className="py-[20px] flex justify-between">
        <div className="flex items-center gap-5">
          <Image src={`/icons/back.png`} alt="home" width="40" height="40" />
          <Image src={`/icons/Forward.png`} alt="home" width="40" height="40" />
        </div>

        <div className=" gap-[11px] flex-row items-center bg-[rgba(0,0,0,0.8)] pl-[3px] pr-3 py-[3px] rounded-[40px] flex">
          <div className=" w-[34px] h-[34px] relative p-0 rounded-full overflow-hidden">
            <Image
              src={`https://api.deezer.com/user/6136819801/image`}
              alt="home"
              width="34"
              height="34"
            />
          </div>
          <span className="">davedirect3</span>
          <svg
            className=""
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 15L1 8L15 8L8 15Z" fill="white" />
          </svg>
        </div>
      </nav>
      {/* main */}
      <div className="py-[20px]">
        <h2 className="font-bold text-4xl mb-7">Good afternoon</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <RowAlbum
            title="Chill Mix"
            coverSrc="https://api.deezer.com/album/302127/image"
          />
          <RowAlbum
            title="Pop Mix"
            coverSrc="https://api.deezer.com/album/302127/image"
          />
          <RowAlbum
            title="Daily Mix 1"
            coverSrc="https://api.deezer.com/album/302127/image"
          />
          <RowAlbum
            title="Daily Mix 2"
            coverSrc="https://api.deezer.com/album/302127/image"
          />
          <RowAlbum
            title="Daily Mix 3"
            coverSrc="https://api.deezer.com/album/302127/image"
          />
          <RowAlbum
            title="Daily Mix 4"
            coverSrc="https://api.deezer.com/album/302127/image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
