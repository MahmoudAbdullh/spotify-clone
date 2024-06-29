import Image from "next/image";
import React from "react";

type RowAlbumProps = {
  title: string;
  coverSrc: string;
};

const RowAlbum = ({ title, coverSrc }: RowAlbumProps) => {
  return (
    <div className="flex items-center gap-5 bg-white/10">
      <Image src={coverSrc} alt="home" width="82" height="82" />
      <p className="font-bold text-xl">{title}</p>
    </div>
  );
};

export default RowAlbum;
