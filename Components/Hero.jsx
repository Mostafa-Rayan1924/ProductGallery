import Image from "next/image";

const Hero = () => {
  return (
    <section className=" container  h-[550px] place-items-center place-content-center md:grid sm:grid-cols-2">
      <div className="">
        <div className="text-center md:text-start ">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/25">
            YOUR BEST ONLINE SHOP DESTINATION
          </h2>

          <p className=" text-gray-500 max-w-full my-4 ">
            Discover a world of endless shopping possibilities at our online
            store. Browse, Choses, and order your favorite products from the
            comfort of your home.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-lime-500 focus:outline-none focus:ring focus:ring-yellow-400">
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <Image
        src={"/Image/Hero.svg"}
        className="hidden md:flex"
        width={300}
        height={300}
        alt="heroImg"
      />
    </section>
  );
};

export default Hero;
