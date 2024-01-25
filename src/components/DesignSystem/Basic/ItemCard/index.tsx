import { Rate, Skeleton } from "antd";
import { FC } from "react";

type Props = {
  links?: string;
  name?: string;
  desc?: string;
  timeDay?: string;
  rating?: number;
  isLoadings?: boolean;
};
export const ItemCard: FC<Props> = ({
  links,
  desc,
  timeDay,
  name,
  rating,
  isLoadings,
}) => {
  return (
    <div className="w-[180px]">
      {!isLoadings ? (
        <div className="">
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={"https://image.tmdb.org/t/p/original" + links}
            alt={name}
          />
          <div className="flex flex-col p-3 gap-1">
            <h2 className="text-base text-gray_900 font-medium line-clamp-2 min-h-12">
              {name}
            </h2>
            <Rate
              className="text-sm"
              disabled
              defaultValue={rating ? rating / 2 : 0}
            />
            <span className="text-sm">{timeDay}</span>
          </div>
        </div>
      ) : (
        <Skeleton.Image
          className="min-w-[165px] min-h-56 object-cover rounded-lg"
          active
        />
      )}
    </div>
  );
};
