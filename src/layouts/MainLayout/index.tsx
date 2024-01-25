"use client";
import { FC, useEffect, useState } from "react";
import { Navabar } from "../Navbar";
import { Header } from "../Header";
import classNames from "classnames";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isScrollHeader, setIsScrollHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < prevScrollY) {
        setIsScrollHeader(true);
      } else {
        setIsScrollHeader(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full mx-auto min-h-[2000px] bg-white">
        <div
          className={classNames(
            "fixed top-0 w-full shadow-md duration-300 z-50",
            !isScrollHeader ? "-translate-y-8" : ""
          )}
        >
          <div className="border-b bg-transparent">
            <Navabar />
          </div>
          <Header />
        </div>
        <div className="max-w-7xl w-full mx-auto pt-28">{children}</div>
      </div>
    </QueryClientProvider>
  );
};
