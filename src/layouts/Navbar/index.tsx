import Link from "next/link";
import { FC } from "react";

export const Navabar: FC = () => {
  const listMenuNabar = [
    {
      name: "Trang chủ",
      links: "/",
    },
    {
      name: "Sản phẩm",
      links: "/",
    },
    {
      name: "Giới thiệu",
      links: "/",
    },
    {
      name: "Liên hệ",
      links: "/",
    },
  ];
  return (
    <>
      <div className="w-full h-8 flex items-center bg-white">
        <div className="flex justify-between items-center max-w-7xl w-full mx-auto ">
          <div className="flex gap-4">
            {listMenuNabar.map((item, index) => (
              <Link key={index} href={item?.links}>
                <span className="text-sm text-gray_900">{item?.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
