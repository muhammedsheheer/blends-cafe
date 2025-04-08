"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#F7F4ED] px-4 pb-4 pt-8 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-20">
          <Link
            href={"/"}
            className={
              "text-center font-playfair text-sm font-[400] capitalize tracking-[1.106px] text-[#593710] hover:underline"
            }
          >
            Home
          </Link>
          <Link
            href={"/menu"}
            className={
              "text-center font-playfair text-sm font-[400] capitalize tracking-[1.106px] text-[#593710] hover:underline"
            }
          >
            Menu
          </Link>
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logo.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-28"
            />
          </Link>
          <Link
            href={"/about-us"}
            className={
              "text-center font-playfair text-sm font-[400] capitalize tracking-[1.106px] text-[#593710] hover:underline"
            }
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className={
              "text-center font-playfair text-sm font-[400] capitalize tracking-[1.106px] text-[#593710] hover:underline"
            }
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href={
              "https://www.instagram.com/blends_liverpool?igsh=MTJmMnJraTFzcGQzdw%3D%3D&utm_source=qr"
            }
            target="_blank"
          >
            <Icons.instagram className="text-[#394F3B]" />
          </Link>
          <Link href={"https://g.co/kgs/dKbaavM"} target="_blank">
            <Icons.google className="text-[#394F3B]" />
          </Link>
          <Link
            href={
              "https://www.facebook.com/people/Blends-Cafe/61560530660088/?mibextid=wwXIfr&rdid=4NoAj2XKI0633Ey4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BW7WMXeXs%2F%3Fmibextid%3DwwXIfr"
            }
            target="_blank"
          >
            <Icons.facebook className="text-[#394F3B]" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-0">
          <span className="font-manrope text-xs font-[400] tracking-[0.84px] text-[#240E0D]">
            © 2024 Blendscafe All Rights Reserved |
          </span>
          <Link
            className="font-manrope text-xs font-[400] tracking-[0.84px] text-[#CCAD64] underline"
            href={"https://foodo.ai/"}
            target="_blank"
          >
            Powered By Foodo
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
