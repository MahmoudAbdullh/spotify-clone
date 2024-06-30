import React from "react";
import CardAlbum from "./CardAlbum";
import Link from "next/link";

type TopProps = {
  title: string;
  type: "mixes" | "foryou";
};

const Top = ({ title, type }: TopProps) => {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="font-bold text-3xl">{title}</h2>
        <Link href={`/all?type=${type}`}>
          <span className="font-bold text-base text-[#ADADAD]">SEE ALL</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-14 ">
        <CardAlbum
          title="Chill Mix"
          description="Julia Wolf, Khalid, ayokay and more"
          coverSrc="https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg"
        />
        <CardAlbum
          title="Chill Mix"
          description="Julia Wolf, Khalid, ayokay and more"
          coverSrc="https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg"
        />
        <CardAlbum
          title="Chill Mix"
          description="Julia Wolf, Khalid, ayokay and more"
          coverSrc="https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg"
        />
        <CardAlbum
          title="Chill Mix"
          description="Julia Wolf, Khalid, ayokay and more"
          coverSrc="https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg"
        />
        <CardAlbum
          title="Chill Mix"
          description="Julia Wolf, Khalid, ayokay and more"
          coverSrc="https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg"
        />
      </div>
    </div>
  );
};

export default Top;
