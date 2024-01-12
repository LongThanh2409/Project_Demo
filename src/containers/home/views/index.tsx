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
    <>
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
      <div className="max-w-3xl w-full mx-auto py-10">
        <img
          className="w-full h-32 object-fill rounded-t-lg"
          src="https://static.vinwonders.com/2022/11/ben-xe-nha-trang-banner.jpg"
          alt=""
        />
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold">Xin chào, {"username"}!</h2>
          <h3 className="text-lg font-medium mt-5 uppercase">Chúc Mừng Bạn</h3>
          <span className="text-base mt-24">
            Việc mua vé oneline của bạn đã thành công Và đươi đây là thông tin
            mua vé của bạn
          </span>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex items-center">
              <span className="text-base font-semibold">Mã đặt vé</span>:
              <span className="text-yellow-300 font-medium">{}</span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-semibold">Tuyến đường:</span>
              <span className="text-yellow-300 font-medium">{}</span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-semibold">Điểm đón:</span>
              <span className="text-yellow-300 font-medium">{}</span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-semibold">Điểm trả:</span>
              <span className="text-yellow-300 font-medium">{}</span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-semibold">Thời gian đi:</span>
              <span className="text-yellow-300 font-medium">{}</span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-semibold">Vị trí ghế:</span>
              <span className="text-yellow-300 font-medium">{}</span>
            </div>
          </div>
          <hr className="w-full h-0.5 bg-gray-100 mt-10" />
          <div className="flex flex-col gap-3 mt-5">
            <span className="text-sm font-semibold">
              Lưu ý:{" "}
              <span className="text-sm font-normal">
                Đây là thông tin cần được bảo mật, quý khách vui lòng không chia
                sẻ thông tin này cho bất kì ai để tránh việc mất vế.
              </span>
            </span>

            <button className="w-48 capitalize bg-yellow-500 px-5 py-3 hover:bg-yellow-400 rounded active:bg-yellow-600 text-white">
              Xem chi tiết vé đặt
            </button>
          </div>
          <span className="flex justify-center mt-10 text-sm font-medium">
            @2024 AnhBatMan All Rights{" "}
          </span>
        </div>
      </div>
    </>
  );
};
