

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#394F3B] py-12 pl-4 pr-4 md:py-0 md:pl-0 md:pr-0">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-20">
        <motion.div
          className="w-full md:w-[33%]"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={"/images/home/reserve/image1.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-auto w-full"
          />
        </motion.div>

        <div className="flex w-full flex-col gap-4 md:ml-16 md:w-[34%]">
          <motion.div
            className="flex flex-col gap-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#F7F4ED]">
              booking
            </span>
            <h1 className="font-italiana text-4xl font-[400] capitalize text-[#F7F4ED] md:text-5xl">
              Reserve Your <br />
              Table at Blends <br /> Cafe
            </h1>
          </motion.div>

          <motion.p
            className="w-full max-w-[400px] font-inter text-sm font-[300] text-[#F7F4ED] md:text-base"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            Experience the warmth of Blends Cafe, where great coffee meets a
            cozy ambiance. Book your table now and enjoy a delightful dining
            experience filled with rich flavors, handcrafted beverages, and a
            welcoming atmosphere.
          </motion.p>

          <motion.div
            className=""
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={"/table-booking"}>
              <Button
                className={
                  "flex flex-row items-center justify-center gap-1 rounded-full bg-[#F7F4ED] px-7 py-7 font-playfair text-sm font-[600] capitalize tracking-[1.08px] text-[#2E2E2E] hover:bg-[#e0ddd5] hover:text-[#2E2E2E]"
                }
              >
                Book Now <ArrowRight className="w-5 text-[#2E2E2E]" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="w-full md:w-[33%]"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={"/images/home/reserve/image2.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Reserve;
