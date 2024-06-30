import React from "react";
import RowAlbum from "./RowAlbum";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
      {/* main */}
      <div className="py-[20px]">
        <h2 className="font-bold text-4xl mb-7">Good afternoon</h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
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
