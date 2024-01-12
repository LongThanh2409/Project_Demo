import { notification } from "antd";
import { ReactNode } from "react";
import { css } from "@emotion/css";
import { SHARINGANICON, VIET } from "@/public";

const styleNotificationSuccess = css({
  display: "flex",
  alignItems: "center",
  padding: "16px, 20px, 16px, 20px",
  minHeight: "75px",
  backgroundColor: "var(--light-sucess-background, #F6FFF9)",
  boxShadow: "0px 4px 16px 0px rgba(16, 11, 39, 0.08)",
  borderRadius: "6px",
  border: "1px solid #48C1B5",
  ".ant-notification-notice-message": {
    marginBottom: "0px !important",
  },
});
const styleNotificationError = css({
  display: "flex",
  alignItems: "center",
  padding: "16px, 20px, 16px, 20px",
  minHeight: "75px",
  backgroundColor: "var(--light-error-background, #FFF5F3)",
  boxShadow: "0px 4px 16px 0px rgba(16, 11, 39, 0.08)",
  borderRadius: "6px",
  border: "1px solid #F4B0A1",
  ".ant-notification-notice-message": {
    marginBottom: "0px !important",
  },
});
type Props = {
  title: string;
  message: string;
  duration?: number;
  closeIcon?: boolean | ReactNode;
  key?: string;
};
export const ToastSuccess = ({
  title,
  message,
  duration,
  closeIcon,
  key,
}: Props) => {
  notification.success({
    closeIcon: closeIcon || false,
    duration: duration || 2,
    key: key || "success",
    icon: (
      <div className="-mt-[27px] absolute top-1.5 w-10 h-4 -ml-3">
        <img className="w-10 h-10" src={SHARINGANICON} alt="" />
      </div>
    ),

    message: (
      <div className="">
        <h2 className="absolute text-sm font-semibold top-3 text-gray_850">
          {title}
        </h2>
        <p className="text-xs m-0 mt-3 text-gray_850 whitespace-pre-line">
          {message}
        </p>
      </div>
    ),
    className: styleNotificationSuccess,
  });
};

export const ToastError = ({
  title,
  message,
  duration,
  closeIcon,
  key,
}: Props) => {
  notification.error({
    closeIcon: closeIcon || false,
    duration: duration || 3,
    key: key || "error",
    icon: (
      <div className="-mt-[27px] absolute top-1.5 w-10 h-4 -ml-3">
        <img className="w-10 h-10" src={SHARINGANICON} alt="" />
      </div>
    ),

    message: (
      <div className="">
        <h2 className="absolute text-sm font-semibold top-3 text-gray_850">
          {title}
        </h2>
        <p className="text-xs m-0 mt-3 text-gray_850 whitespace-pre-line">
          {message}
        </p>
      </div>
    ),
    className: styleNotificationError,
  });
};
