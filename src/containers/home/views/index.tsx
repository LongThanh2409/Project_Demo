"use client";
import { SHARINGANICON } from "@/public";
import { ToastError, ToastSuccess } from "@/src/components";
import { FC } from "react";

type Props = {
  children?: React.ReactNode;
};

export const Home: FC<Props> = () => {
  const handlToastSuccess = () => {
    ToastSuccess({
      title: "Thành công",
      message: "Anh Việt Quá Đẹp Trai Xứng Đáng Được Yêu Thương",
    });
  };
  const handlToastError = () => {
    ToastError({
      title: "Đần",
      message: "Anh Việt Đéo Đẹp Trai Đéo Xứng Đáng Được Yêu Thương",
    });
  };
  return (
    <div className="container text-center ">
      <button
        onClick={handlToastSuccess}
        className="border-2 border-red-600 bg-[#F9471B] active:bg-red-500 text-white rounded-lg px-10 py-3 mr-10"
      >
        Click Success
      </button>
      <button
        onClick={handlToastError}
        className="border-2 border-red-600 bg-[#F9471B] active:bg-red-500 text-white rounded-lg px-10 py-3"
      >
        Click Error
      </button>
    </div>
  );
};
