import Image from "next/image";
import React from "react";

type CardAlbumProps = {
  title: string;
  description: string;
  coverSrc: string;
};

const CardAlbum = ({ title, description, coverSrc }: CardAlbumProps) => {
  return (
    <div className="bg-white/5 rounded-lg p-5">
      <Image src={coverSrc} alt="home" width="182" height="182" />
      <h2 className="mt-6 mb-2 font-bold text-xl">{title}</h2>
      <p className="text-[#B3B3B3] text-lg">{description}</p>
    </div>
  );
};

export default CardAlbum;
