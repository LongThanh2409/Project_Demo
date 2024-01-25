import { FC } from "react";

export const Search: FC = () => {
  return (
    <div className="w-full flex justify-between overflow-hidden">
      <input
        type="text"
        name=""
        id=""
        className="flex-1 outline-none border-2 border-blue-500 rounded-s-3xl px-4"
      />
      <button className="font-medium text-white bg-blue-500 w-32 h-12 flex justify-center items-center gap-1 rounded-e-3xl hover:bg-blue-700 active:bg-blue-600">
        <i className="fa-regular fa-magnifying-glass"></i>
        Tìm kiếm
      </button>
    </div>
  );
};
