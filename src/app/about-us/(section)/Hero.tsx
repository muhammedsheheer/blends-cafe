import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#F7F4ED] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-[#000] lg:text-6xl">
                Welcome to Blends Cafe
                <br /> A Harmony of Taste & Comfort
              </h1>
              <p className="font-manrope font-normal text-[#000]">
                At Blends Cafe, every cup and every bite is crafted to bring
                people together over rich flavors and heartfelt moments. From
                carefully brewed coffee to artisan bites and baked delights, we
                blend tradition, quality, and creativity to offer a cafe
                experience like no other. Whether you`re here for your morning
                pick-me-up, a cozy catch-up, or a quiet moment with your
                favorite book, Blends Cafe is your space to savor, relax, and
                feel at home.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <Image
              src="/images/about-us/image2.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
