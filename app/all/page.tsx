"use client";
import { useRouter } from "next/router";
import CardAlbum from "../_components/CardAlbum";
import Navbar from "../_components/Navbar";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";

export default function All() {
  const searchParams = useSearchParams();
  const parsed = queryString.parse(searchParams.toString()).type as
    | "mixes"
    | "foryou";
  const titles: Readonly<Record<string, string>> = {
    mixes: "Your top mixes",
    foryou: "Made for you",
  };
  return (
    <div className="grow">
      <Navbar />
      <div>
        <div className="flex justify-between mb-6">
          <h2 className="font-bold text-3xl">{titles[parsed] || "All"}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-14">
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
          <CardAlbum
            title="Chill Mix"
            description="Julia Wolf, Khalid, ayokay and more"
            coverSrc="https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg"
          />
        </div>
      </div>
    </div>
  );
}
