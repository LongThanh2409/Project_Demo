"use client";
import { ListBlock } from "@/src/components";
import { useGetDataQueryListTrending } from "../hooks";
import { useRef, useState } from "react";
import { ItemCard } from "@/src/components/DesignSystem/Basic/ItemCard";
import { IItemCard } from "@/src/models/ItemCard";
import classNames from "classnames";
import { css } from "@emotion/css";
import { Carousel } from "antd";

type Props = {
  dataTrendingSever?: IItemCard[];
};
export const Trending = ({ dataTrendingSever }: Props) => {
  const [indexSlide, setIndexSlide] = useState(0);
  const [timWindow, setTimWindow] = useState<"day" | "week">("day");
  const refSliders = useRef(null as any);
  const { data: dataTrending, isLoading: LoadingTrending } =
    useGetDataQueryListTrending(timWindow);

  const handleChangeTimeWindow = (value: "day" | "week") => {
    setTimWindow(value);
  };
  const handleAfterChange = (current: number) => {
    setIndexSlide(current);
  };

  return (
    <div className="w-full ">
      <ListBlock
        title="Thịnh Hành"
        titleOnchange={[
          { label: "Hôm nay", value: "day" },
          { label: "Tuần", value: "week" },
        ]}
        onchange={handleChangeTimeWindow}
      >
        <div className="relative rounded-lg group py-5">
          <Carousel
            autoplay
            slidesToShow={7}
            ref={refSliders}
            afterChange={handleAfterChange}
            infinite={false}
          >
            {dataTrending?.results?.map((item: IItemCard, index: number) => {
              if (item?.title) {
                return (
                  <div key={index} className="w-full rounded-lg">
                    <ItemCard
                      isLoadings={LoadingTrending}
                      links={item?.backdrop_path}
                      name={item?.title}
                      desc={item?.overview}
                      timeDay={item?.release_date}
                      rating={item?.vote_average}
                    />
                  </div>
                );
              }
            })}
          </Carousel>
          <div className="absolute top-1/2 -translate-y-1/2 w-full">
            <i
              onClick={() => {
                refSliders?.current?.prev();
                console.log(refSliders?.current);
              }}
              className={classNames(
                "fa-solid fa-chevron-left w-10 h-10 group-hover:bg-white rounded-3xl flex items-center justify-center group-hover:-ml-6 group-hover:shadow-lg cursor-pointer duration-300 text-gray_900",
                indexSlide === 0 && "hidden"
              )}
            ></i>
            <i
              onClick={() => {
                refSliders?.current?.next();
              }}
              className={classNames(
                "absolute top-1/2 -translate-y-1/2 fa-solid fa-chevron-right  w-10 h-10 group-hover:bg-white rounded-3xl flex items-center justify-center group-hover:-mr-6 group-hover:shadow-lg cursor-pointer duration-300 text-gray_900 right-0",
                indexSlide === dataTrending?.results?.length && "hidden"
              )}
            ></i>
          </div>
        </div>
      </ListBlock>
    </div>
  );
};
