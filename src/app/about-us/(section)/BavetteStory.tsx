import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#F7F4ED] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#F7F4ED]">
        <h2 className="font-oswald text-center text-8xl text-[#000] md:left-[15%] md:text-8xl">
          The Blends Cafe
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#F7F4ED] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/image3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#000] sm:text-7xl md:text-start">
              From Passion
              <br />
              to Perfection
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#000] md:text-start">
              What started as a simple idea—to create a space where flavor,
              comfort, and connection blend perfectly—has grown into Blends
              Cafe, a cozy destination where every cup and plate tells a story.
              Born from a deep love for quality and community, Blends was
              created to be more than just a cafe—it’s an experience to savor.
              <br />
              From our early days to becoming a favorite gathering spot, our
              dedication to fresh ingredients, rich flavors, and welcoming vibes
              has never changed. Every roast is carefully selected, every recipe
              thoughtfully crafted, and every visit made to feel like home.
              <br />
              At Blends Cafe, we don’t just serve coffee or food—we create
              memories. As we continue our journey, our goal remains the same:
              to bring people together through exceptional taste and heartfelt
              hospitality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
