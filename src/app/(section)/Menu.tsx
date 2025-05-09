"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Menu: React.FC = () => {
  const menuItems = [
    {
      name: "Shawarma Manouche",
      image: "/images/home/menu/1.jpg",
    },
    {
      name: "Lahamajoun",
      image: "/images/home/menu/2.jpg",
    },
    {
      name: "zattar veg manouche",
      image: "/images/home/menu/3.jpg",
    },
    {
      name: "Puck and Honey Manouche",
      image: "/images/home/menu/4.jpg",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="h-full w-full bg-[#F7F4ED] px-4 py-8 md:px-20 md:py-20"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:gap-16">
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-2"
        >
          <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#040404]">
            Menu
          </span>
          <h1 className="text-center font-italiana text-5xl font-[400] capitalize text-[#040404] md:text-7xl">
            Explore our menu
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex w-full flex-col items-center justify-center gap-4 md:gap-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-full w-full rounded-br-full rounded-tl-full">
                <Link href={"/menu"}>
                  <Image
                    src={item.image}
                    width={677}
                    height={503}
                    alt={item.name}
                    className="h-auto w-full rounded-t-full rounded-bl-full object-cover md:h-[300px]"
                  />
                </Link>
              </div>
              <h6 className="text-center font-italiana text-2xl font-[400] capitalize text-[#000] md:tracking-[1.8px]">
                {item.name}
              </h6>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Menu;
