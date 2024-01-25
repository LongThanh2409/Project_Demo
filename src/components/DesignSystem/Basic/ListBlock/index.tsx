import { css } from "@emotion/css";
import { Segmented } from "antd";
import classNames from "classnames";
import { FC } from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
  onchange?: any;
  titleOnchange?: any;
  classNamess?: string;
};
export const ListBlock: FC<Props> = ({
  children,
  title,
  onchange,
  titleOnchange,
  classNamess,
}) => {
  return (
    <div className={classNames(classNamess)}>
      <div className="flex gap-5">
        <h2 className="text-2xl text-gray_900 font-medium">{title}</h2>
        <Segmented
          onChange={onchange}
          options={titleOnchange}
          className={css({
            "&": {
              borderRadius: "7rem !important",
              fontWeight: "600 !important",
              ".ant-segmented-item": {
                borderRadius: "7rem !important",
              },

              ".ant-segmented-item-selected": {
                backgroundColor: "#2563EB !important",
                color: "#fff !important",
              },
            },
          })}
        />
      </div>
      {children}
    </div>
  );
};
