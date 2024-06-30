import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import RowAlbum from "./RowAlbum";
import axios, { AxiosResponse } from "axios";
import { User } from "../_types/user";

type NavbarProps = {
  children?: ReactNode;
};
const Navbar = ({ children }: NavbarProps) => {
  const [user, setUser] = useState<User>();
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get<void, AxiosResponse<{ data: User }>>("api/user")
      .then((res) => {
        setUser(res.data?.data);
        setIsloading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsloading(false);
        setIsError(true);
      });

    return () => {};
  }, []);

  return (
    <nav className="py-[20px] flex justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <Image src={`/icons/back.png`} alt="home" width="40" height="40" />
          <Image src={`/icons/Forward.png`} alt="home" width="40" height="40" />
        </div>
        {children}
      </div>
      <div className=" gap-[11px] flex-row items-center bg-[rgba(0,0,0,0.8)] pl-[3px] pr-3 py-[3px] rounded-[40px] flex">
        <div className=" w-[34px] h-[34px] relative p-0 rounded-full overflow-hidden">
          <Image
            src={user?.picture_small || ""}
            alt="home"
            width="34"
            height="34"
          />
        </div>
        <span className="">{user?.name}</span>
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
  );
};

export default Navbar;
