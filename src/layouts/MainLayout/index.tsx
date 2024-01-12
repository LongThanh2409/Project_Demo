import { FC } from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      {/* <Header /> */}
      <div className="main-layout__content">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};
