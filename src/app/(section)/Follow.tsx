import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Follow: React.FC = () => {
  return (
    <motion.section
      className="relative h-full w-full bg-[#394F3B] px-4 pb-4 pt-12 md:px-10 md:pt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex w-full flex-col gap-6 md:flex-row md:items-end">
        <motion.div
          className="z-50 w-full md:w-[30%]"
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={"/images/home/follow/image1.png"}
            width={281}
            height={74}
            alt="logo"
            className="z-50 h-auto w-full"
          />
        </motion.div>

        <div
          className="z-50 flex h-full w-full flex-col items-center justify-center gap-6 pb-8 pt-8 md:w-[40%] md:gap-16 md:pb-32 md:pt-20"
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
            <Link href={"tel:+01513453923"}>
              <span className="text-center font-inter text-xl font-[400] text-[#394F3B] md:text-2xl">
                0151 345 3923
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-inter text-sm font-[500] capitalize tracking-[0.72px] text-[#394F3B]">
              Location{" "}
            </span>
            <Link href={"https://g.co/kgs/dKbaavM"} className="text-center">
              <span className="text-center font-inter text-xl font-[400] text-[#394F3B] md:text-2xl">
                14 Williamson St, Liverpool <br /> L1 1EB, United Kingdom
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-inter text-sm font-[500] capitalize tracking-[0.72px] text-[#394F3B]">
              Opening Hours{" "}
            </span>
            <span className="text-center font-inter text-base font-[400] text-[#394F3B] md:text-lg">
              Monday-Thursday: 09:00 AM - 08:00 PM{" "}
            </span>
            <span className="text-center font-inter text-base font-[400] text-[#394F3B] md:text-lg">
              Friday-Saturday: 09:00 AM - 09:00 PM{" "}
            </span>
            <span className="text-center font-inter text-base font-[400] text-[#394F3B] md:text-lg">
              Sunday: 10:00 AM - 07:00 PM{" "}
            </span>
          </div>
        </div>

        <motion.div
          className="z-50 w-full md:w-[30%]"
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={"/images/home/follow/image2.png"}
            width={281}
            height={74}
            alt="logo"
            className="z-50 h-auto w-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Follow;
