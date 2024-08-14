const AboutHero = () => {
  return (
    <section className="relative py-5 bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 dark:bg-black/75 bg-white/75 sm:to-white/25  dark:sm:to-black/25 sm:bg-gradient-to-r "></div>
      <div className="relative dark:text-white text-black container flex h-[60vh] lg:h-[80vh] justify-center md:justify-start  text-center md:text-start items-center lg:px-8">
        <div>
          <h1 className="text-2xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-primary">
              Forever Home.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8  flex flex-wrap justify-center md:justify-start gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
