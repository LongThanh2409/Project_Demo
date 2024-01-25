import { FC } from "react";
import { Search } from "../Search";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl w-full mx-auto h-20 flex items-center justify-between px-10">
          <Link href={"/"} className="w-44 h-14 rounded-md overflow-hidden">
            <img
              src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
          <div className="w-[650px]">
            <Search />
          </div>
          <div className="flex gap-4">
            <button className="bg-transparent border-2 border-blue-500 px-4 py-1.5 text-blue-500 rounded-lg">
              Đăng ký
            </button>
            <button className=" border-2 bg-blue-500 px-4 py-1.5 text-white rounded-lg">
              Đăng Nhập
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
