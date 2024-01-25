import { FC } from "react";

type Props = {
  children?: React.ReactNode;
};

export const Cart: FC<Props> = () => {
  return (
    <div className="main-container">
      <img
        className="main-banner"
        src="https://static.vinwonders.com/2022/11/ben-xe-nha-trang-banner.jpg"
        alt=""
      />
      <div className="main-content">
        <h2 className="main-greeting">Xin chào, username!</h2>
        <h3 className="main-subtitle">Chúc Mừng Bạn</h3>
        <span className="main-info-text">
          Việc mua vé online của bạn đã thành công và dưới đây là thông tin mua
          vé của bạn
        </span>
        <div className="main-info-list">
          <div className="main-info-item">
            <span className="main-info-label">Mã đặt vé</span>:
            <span className="main-info-value">Your Booking Code</span>
          </div>
          <div className="main-info-item">
            <span className="main-info-label">Tuyến đường:</span>
            <span className="main-info-value">Your Route</span>
          </div>
          <div className="main-info-item">
            <span className="main-info-label">Điểm đón:</span>
            <span className="main-info-value">Your Pickup Point</span>
          </div>
          <div className="main-info-item">
            <span className="main-info-label">Điểm trả:</span>
            <span className="main-info-value">Your Drop-off Point</span>
          </div>
          <div className="main-info-item">
            <span className="main-info-label">Thời gian đi:</span>
            <span className="main-info-value">Your Departure Time</span>
          </div>
          <div className="main-info-item">
            <span className="main-info-label">Vị trí ghế:</span>
            <span className="main-info-value">Your Seat Location</span>
          </div>
        </div>
        <hr className="main-separator" />
        <div className="main-additional-info">
          <span className="main-info-note">
            Lưu ý:{" "}
            <span className="main-info-description">
              Đây là thông tin cần được bảo mật, quý khách vui lòng không chia
              sẻ thông tin này cho bất kì ai để tránh việc mất vé.
            </span>
          </span>

          <button className="main-cta-button">Xem chi tiết vé đặt</button>
        </div>
        <span className="main-footer-text">@2024 AnhBatMan All Rights</span>
      </div>
    </div>
  );
};
