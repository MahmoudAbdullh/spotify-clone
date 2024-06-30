"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../_components/Navbar";
import axios, { AxiosResponse } from "axios";
import { Track } from "../_types/Track";
import RowAlbum from "../_components/RowAlbum";
import CardAlbum from "../_components/CardAlbum";
import ReactPaginate from "react-paginate";
import { useSoundStore } from "../_store/sound";

type Props = {};

const Search = (props: Props) => {
  const setSound = useSoundStore((state) => state.setSound);
  const [result, setResult] = useState<Track[]>([]);
  const [searchTxt, setsearchTxt] = useState("");
  const [isloading, setIsloading] = useState(false);
  //
  const [currentItems, setCurrentItems] = useState<Track[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    if (searchTxt.length > 3) {
      setIsloading(true);
      axios
        .get<void, AxiosResponse<{ data: Track[] }>>(
          `/api/search?q=${searchTxt}`
        )
        .then((res) => {
          console.log(res);

          setResult(res.data.data);
          setIsloading(false);
        })
        .catch(() => {
          setIsloading(false);
        });
    }

    return () => {};
  }, [searchTxt]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(result.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(result.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, result]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % result.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="grow">
      <Navbar>
        <input
          placeholder="Artists, songs, or podcasts"
          className="rounded-lg text-gray-500 px-4 py-2 grow sm:w-[450px]"
          onChange={(e) => setsearchTxt(e.target.value)}
          value={searchTxt}
        />
      </Navbar>
      {isloading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white">
          <p className="text-black font-bold text-3xl">Loading...</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-14 ">
        {currentItems?.map((t) => (
          <div
            onClick={() => {
              setSound(t.preview);
            }}
            key={t.id}
          >
            <CardAlbum
              description={t.artist.name}
              title={t.title}
              coverSrc={t.album.cover_big}
            />
          </div>
          // <RowAlbum title={t.title} coverSrc={t.album.cover_big} key={t.id} />
        ))}
      </div>
      {pageCount > 1 && (
        <div className="flex py-9 justify-center">
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            nextClassName="ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="isolate inline-flex rounded-md shadow-sm gap-3"
            activeClassName="bg-indigo-600"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
