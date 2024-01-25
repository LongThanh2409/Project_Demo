"use client";
import { FC } from "react";
import { Banner, Trending } from "../components";
import { IItemCard } from "@/src/models/ItemCard";
import { Trailers } from "../components/Trailers";

type Props = {
  children?: React.ReactNode;
  dataTrendingSever?: IItemCard[];
};

export const Home: FC<Props> = ({ dataTrendingSever }: Props) => {
  return (
    <>
      <Banner />
      <div className="mt-10">
        <Trending dataTrendingSever={dataTrendingSever} />
      </div>
      <div className="mt-10">
        <Trailers />
      </div>
    </>
  );
};
