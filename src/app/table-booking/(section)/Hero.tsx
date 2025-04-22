const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="relative flex h-full min-h-[400px] w-full flex-col items-center justify-center gap-[1.38rem] bg-[url('/images/about-us/6.png')] bg-cover bg-center bg-no-repeat text-[1.5rem] leading-[110%]"
    >
      {/* Dark overlay that covers the whole section */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Highlighted text on top of the dark overlay */}
      <h1 className="z-10 w-full text-center font-playfair text-[4.75rem] leading-[80%] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        Table Booking
      </h1>
    </section>
  );
};

export default Hero;
