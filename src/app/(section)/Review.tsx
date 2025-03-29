"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#F7F4ED] pb-28 pt-10 md:pb-32 md:pt-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 pb-4 md:pb-16 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[1.2px] text-[#040404]">
              Reviews{" "}
            </span>
            <h1 className="text-center font-italiana text-5xl font-[400] capitalize text-[#040404] md:text-7xl">
              Hear Our Guests{" "}
            </h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {reviews && (
            <Carousel className="ml-6 mr-0 w-full md:ml-0 md:mr-12">
              <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className={`flex w-full basis-full flex-col items-center justify-center gap-6 rounded-xl border border-[#DEDEDE] bg-transparent py-6 md:basis-1/4 md:py-12`}
                  >
                    <div className="flex flex-col items-start justify-start gap-6 px-6 pb-4">
                      <div className="flex flex-row items-center justify-center gap-1">
                        <Image
                          src={review.authorAttribution.photoUri}
                          width={677}
                          height={503}
                          alt="image"
                          className="h-10 w-10"
                        />
                        <div className="flex flex-col">
                          <p>{review.authorAttribution.displayName}</p>
                          <p>{review.relativePublishTimeDescription}</p>
                        </div>
                      </div>
                      <div className="flex w-full justify-start">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#040404]"
                            />
                          ),
                        )}
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="line-clamp-5 font-inter text-sm font-[400] text-[#040404] md:text-base">
                          {review.text.text}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#000] text-[#000] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#000] text-[#000] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
