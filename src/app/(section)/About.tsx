"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="h-full w-full bg-[#F7F4ED] py-12 pl-4 pr-4 md:py-24 md:pl-16 md:pr-28"
    >
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-20">
        <motion.div variants={fadeLeft} className="w-full md:w-[37%]">
          <Image
            src={"/images/home/about/image1.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-auto w-full"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex w-full flex-col gap-4 md:ml-8 md:w-[35%]"
        >
          <div className="flex flex-col gap-2">
            <span className="font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#040404]">
              About us
            </span>
            <h1 className="font-italiana text-4xl font-[400] capitalize text-[#040404] md:text-5xl">
              Welcome <br />
              to Blends Cafe
            </h1>
          </div>
          <p className="w-full max-w-[400px] font-inter text-sm font-[300] text-[#262626] md:text-base">
            At Blends Cafe, we believe in more than just great coffee—we create
            experiences. Nestled in the heart, our cafe is a haven for coffee
            lovers, food enthusiasts, and those looking for a warm, inviting
            space to relax or work.
          </p>
          <div>
            <Link href={"/menu"}>
              <Button className="flex flex-row items-center justify-center gap-1 rounded-full bg-[#394F3B] px-7 py-7 font-playfair text-sm font-[600] capitalize tracking-[1.08px] text-[#F7F4ED] hover:bg-[#536e55] hover:text-[#F7F4ED]">
                View Menu <ArrowRight className="w-5 text-[#F7F4ED]" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={fadeRight} className="w-full md:w-[28%]">
          <Image
            src={"/images/home/about/image2.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
