import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = [
  {
    name: "Zattar Manouche ",
    image: "/images/home/menu/5.jpg",
    price: "£ 4.50",
  },
  {
    name: "Labneh Manouche",
    image: "/images/home/menu/6.jpg",
    price: "£ 5.50",
  },
  {
    name: "Spinch Manouche",
    image: "/images/home/menu/8.jpg",
    price: "£ 6.50",
  },
  {
    name: "Cheese & Eggs Manouche",
    image: "/images/home/menu/7.jpg",
    price: "£ 7.00",
  },
];

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#F7F4ED] px-4 py-8 md:px-12 md:py-20 2xl:px-36">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:gap-16">
        {/* Title */}
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

          {/* Big title for md+ screens */}
          <h1 className="hidden text-center font-italiana text-5xl font-[400] capitalize text-[#040404] md:block md:text-7xl">
            <motion.span
              className="inline-block"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0, 15, 0] }}
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
              animate={{ y: [0, -15, 0, 15, 0] }}
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

          {/* Small screen title */}
          <h1 className="text-center font-italiana text-5xl font-[400] capitalize text-[#040404] md:hidden md:text-7xl">
            <motion.span
              className="inline-block"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0, 15, 0] }}
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
              animate={{ y: [0, -15, 0, 15, 0] }}
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

        {/* Menu Items */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 2xl:gap-12">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex w-full flex-col items-center justify-center gap-6"
            >
              {/* Image */}
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Link href={"/menu"}>
                  <Image
                    src={item.image}
                    width={677}
                    height={503}
                    alt={item.name}
                    className="h-[300px] w-full rounded-b-full rounded-tr-full object-cover md:h-[350px] 2xl:h-[400px]"
                  />
                </Link>
              </motion.div>

              {/* Name & Price */}
              <motion.div
                className="flex flex-col gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <span className="text-center font-inter text-base font-[400] text-[#040404]">
                  {item.name}
                </span>
                <span className="text-center font-inter text-sm font-[500] uppercase tracking-[2px] text-[#040404]">
                  {item.price}
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
