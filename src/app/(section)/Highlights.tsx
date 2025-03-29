import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#F7F4ED] px-12 py-8 md:px-36 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:gap-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#040404]">
            Our top picks
          </span>
          <h1 className="text-center font-italiana text-5xl font-[400] capitalize text-[#040404] md:text-7xl">
            Monthly Highlights{" "}
          </h1>
        </div>
        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image1.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-center font-inter text-base font-[400] text-[#040404]">
                Adana Kebab
              </span>
              <span className="text-center font-inter text-sm font-[500] uppercase tracking-[2px] text-[#040404]">
                € 120
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image2.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-center font-inter text-base font-[400] text-[#040404]">
                Adana Kebab
              </span>
              <span className="text-center font-inter text-sm font-[500] uppercase tracking-[2px] text-[#040404]">
                € 120
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image3.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-center font-inter text-base font-[400] text-[#040404]">
                Adana Kebab
              </span>
              <span className="text-center font-inter text-sm font-[500] uppercase tracking-[2px] text-[#040404]">
                € 120
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image5.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-center font-inter text-base font-[400] text-[#040404]">
                Adana Kebab
              </span>
              <span className="text-center font-inter text-sm font-[500] uppercase tracking-[2px] text-[#040404]">
                € 120
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
