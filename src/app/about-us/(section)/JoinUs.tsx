import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center opacity-90"
      style={{
        backgroundImage: `url('/images/about-us/image4.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="font-oswald max-w-[500px] text-center text-5xl leading-[60px] text-[#fff]">
            Experience a Feast
            <br />
            to Remember
          </h1>
          <p className="max-w-[450px] text-center font-[600] leading-[160%] text-[#ffff]">
            Whether you`re sharing a quiet evening or hosting a vibrant
            celebration, Levant welcomes you to savor an unforgettable dining
            experience. From the deep roots of Middle Eastern tradition to
            carefully chosen ingredients, each dish reflects our love for
            authenticity and flavor. Step into a world where timeless recipes
            meet creative flair—where every bite honors culture, passion, and
            the joy of great food.
          </p>

          <Link href={"/table-booking"}>
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-[#fff] bg-transparent px-7 py-7 font-semibold uppercase text-[#fff] hover:bg-[#000]"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-[#fff] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
