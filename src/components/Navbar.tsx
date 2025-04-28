"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4 md:pt-6`,
        pathname === "/" ? "bg-transparent" : "pt-4 md:pt-5",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 md:block md:px-14">
        <div className="flex flex-row items-center justify-between">
          <div></div>
          <div
            className={`flex flex-row items-center justify-center gap-20 rounded-full px-40 py-8 backdrop-blur-[27.8px] ${
              pathname === "/" || pathname === "/table-booking"
                ? "bg-[rgba(10,10,10,0.03)]"
                : "bg-[#394F3B]"
            }`}
          >
            <Link
              href="/"
              className={`text-center font-playfair text-sm font-[400] capitalize tracking-[1.106px] ${
                pathname === "/" || pathname === "/table-booking"
                  ? "text-[#fff]"
                  : "text-[#fff]"
              } hover:underline`}
            >
              Home
            </Link>

            <Link
              href={"/menu"}
              className={`text-center font-playfair text-sm font-[400] capitalize tracking-[1.106px] ${
                pathname === "/" || pathname === "/table-booking"
                  ? "text-[#fff]"
                  : "text-[#fff]"
              } hover:underline`}
            >
              Menu
            </Link>

            <Link
              href={"/about-us"}
              className={`text-center font-playfair text-sm font-[400] capitalize tracking-[1.106px] ${
                pathname === "/" || pathname === "/table-booking"
                  ? "text-[#fff]"
                  : "text-[#fff]"
              } hover:underline`}
            >
              About
            </Link>

            <Link
              href={"/contact"}
              className={`text-center font-playfair text-sm font-[400] capitalize tracking-[1.106px] ${
                pathname === "/" || pathname === "/table-booking"
                  ? "text-[#fff]"
                  : "text-[#fff]"
              } hover:underline`}
            >
              Contact
            </Link>
          </div>
          <div className="">
            <Link href={"/table-booking"}>
              <Button
                className={`flex flex-row items-center justify-center gap-1 rounded-full px-7 py-7 font-playfair text-sm font-[600] capitalize tracking-[1.08px] backdrop-blur-[27.8px] ${
                  pathname === "/" || pathname === "/table-booking"
                    ? "bg-[rgba(10,10,10,0.03)] text-[#F7F4ED] hover:text-[#F7F4ED]"
                    : "bg-[#394F3B] text-[#fff] hover:bg-[#5a785d]"
                }`}
              >
                book table{" "}
                <ArrowRight
                  className={`${
                    pathname === "/" || pathname === "/table-booking"
                      ? "w-5 text-[#F7F4ED]"
                      : "w-5 text-[#fff]"
                  }`}
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-16"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizer-icon rotate">
      <div
        className={clsx("bar", pathname === "/" ? "bg-[#fff]" : "bg-[#394F3B]")}
      ></div>
      <div
        className={clsx("bar", pathname === "/" ? "bg-[#fff]" : "bg-[#394F3B]")}
      ></div>
      <div
        className={clsx("bar", pathname === "/" ? "bg-[#fff]" : "bg-[#394F3B]")}
      ></div>
    </div>
  );
};
