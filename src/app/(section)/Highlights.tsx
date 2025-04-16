

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#F7F4ED] px-12 py-8 md:px-36 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:gap-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.span
            className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#040404]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Our top picks
          </motion.span>

          <h1 className="hidden text-center font-italiana text-5xl font-[400] capitalize text-[#040404] md:block md:text-7xl">
            <motion.span
              className="inline-block"
              initial={{ y: 0 }}
              animate={{
                y: [0, -15, 0, 15, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              M
            </motion.span>
            {"onthly "}

            <motion.span
              className="inline-block"
              initial={{ y: 0 }}
              animate={{
                y: [0, -15, 0, 15, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              H
              <br />
            </motion.span>
            {"ighlights"}
          </h1>
          <h1 className="text-center font-italiana text-5xl font-[400] capitalize text-[#040404] md:hidden md:text-7xl">
            <motion.span
              className="inline-block"
              initial={{ y: 0 }}
              animate={{
                y: [0, -15, 0, 15, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              M
            </motion.span>
            {"onthly "}
            <br />
            <motion.span
              className="inline-block"
              initial={{ y: 0 }}
              animate={{
                y: [0, -15, 0, 15, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              H
            </motion.span>
            {"ighlights"}
          </h1>
        </div>

        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          {["image1", "image2", "image3", "image5"].map((image, idx) => (
            <div
              key={idx}
              className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]"
            >
              <motion.div
                className="h-full w-full rounded-t-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Image
                  src={`/images/home/highlights/${image}.png`}
                  width={677}
                  height={503}
                  alt="image"
                  className="h-auto w-full rounded-t-full object-cover"
                />
              </motion.div>

              <motion.div
                className="flex flex-col gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <span className="text-center font-inter text-base font-[400] text-[#040404]">
                  Adana Kebab
                </span>
                <span className="text-center font-inter text-sm font-[500] uppercase tracking-[2px] text-[#040404]">
                  € 120
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
