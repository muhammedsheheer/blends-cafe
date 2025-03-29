import Image from "next/image";
import React from "react";

const data = [
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: 25,
  },
  {
    name: "PAN SEARED SEA BASS",
    description: "Saffron and mussel's broth, new potatoes, edamame beans",
    price: 38,
  },
  {
    name: "KING PRAWNS AND LOBSTER",
    description: "Creamy saffron, sauce Vierge",
    price: 38,
  },
  {
    name: "BEEF BURGER MEAL",
    description: "Classic greek salad, barrel aged feta cheese, bread",
    price: 32,
  },
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: 25,
  },
];

const Menu: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#F7F4ED] px-12 py-8 md:px-20 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:gap-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#040404]">
            Menu
          </span>
          <h1 className="text-center font-italiana text-5xl font-[400] capitalize text-[#040404] md:text-7xl">
            Explore our menu
          </h1>
        </div>
        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/menu/image1.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <h6 className="text-center font-italiana text-2xl font-[400] capitalize text-[#000] md:text-3xl md:tracking-[1.8px]">
              Shawarma Manouche
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/menu/image2.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <h6 className="text-center font-italiana text-2xl font-[400] capitalize text-[#000] md:text-3xl md:tracking-[1.8px]">
              Lahamajoun
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/menu/image3.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <h6 className="text-center font-italiana text-2xl font-[400] capitalize text-[#000] md:text-3xl md:tracking-[1.8px]">
              Cappuccino
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[25%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/menu/image5.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full"
              />
            </div>
            <h6 className="text-center font-italiana text-2xl font-[400] capitalize text-[#000] md:text-3xl md:tracking-[1.8px]">
              Halloumi Manouche
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
