import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#394F3B] px-4 pb-4 pt-12 md:px-10 md:pt-16">
      <div className="flex w-full flex-col gap-6 md:flex-row md:items-end">
        <div className="w-full md:w-[30%]">
          <Image
            src={"/images/home/follow/image1.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-auto w-full"
          />
        </div>
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-6 pb-8 pt-8 md:w-[40%] md:gap-16 md:pb-32 md:pt-20"
          style={{
            borderRadius: "999px 999px 0px 0px",
            background: "rgba(255,255,255,0.86)",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#394F3B]">
              connect
            </span>
            <h2 className="text-center font-italiana text-3xl font-[400] capitalize text-[#394F3B] md:text-5xl">
              Contact us
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-inter text-sm font-[500] capitalize tracking-[0.72px] text-[#394F3B]">
              Booking request
            </span>
            <Link href={""}>
              <span className="text-center font-inter text-xl font-[400] text-[#394F3B] md:text-2xl">
                +44 151 345 3923
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-inter text-sm font-[500] capitalize tracking-[0.72px] text-[#394F3B]">
              Location{" "}
            </span>
            <Link href={""} className="text-center">
              <span className="text-center font-inter text-xl font-[400] text-[#394F3B] md:text-2xl">
                14 Williamson St, Liverpool L1 <br /> 1EB, United Kingdom{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-inter text-sm font-[500] capitalize tracking-[0.72px] text-[#394F3B]">
              Opening Hours{" "}
            </span>
            <span className="text-center font-inter text-base font-[400] text-[#394F3B] md:text-lg">
              Monday-Friday: 11:00 AM - 09:00 PM{" "}
            </span>
            <span className="text-center font-inter text-base font-[400] text-[#394F3B] md:text-lg">
              Saturday-Sunday: 10:00 AM - 09:00 PM{" "}
            </span>
          </div>
        </div>
        <div className="w-full md:w-[30%]">
          <Image
            src={"/images/home/follow/image2.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Follow;
