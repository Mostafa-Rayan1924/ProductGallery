import Image from "next/image";

const productDetails = async ({ params }) => {
  let proId = params.proid;
  let data;
  try {
    let response = await fetch(`https://dummyjson.com/products/${proId}`);
    data = await response.json();
  } catch (e) {
    console.log(e);
  }
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src={data.thumbnail}
              className="absolute shadow inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">{data.title}</h2>

            <p className="mt-4 text-gray-600">{data.description}</p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className=" rounded bg-primary px-4 py-1 text-sm font-medium text-white transition  focus:outline-none focus:ring focus:ring-yellow-400">
                {data.category}
              </a>
              <a
                href="#"
                className=" rounded bg-transparent border border-primary text-black px-4 py-1 text-sm font-medium  transition  focus:outline-none focus:ring focus:ring-yellow-400">
                {data.price}$
              </a>

              <a
                href="#"
                className=" rounded bg-primary px-4 py-1 text-sm font-medium text-white transition  focus:outline-none focus:ring focus:ring-yellow-400">
                {data.brand}
              </a>
            </div>
          </div>
        </div>
        <div className="flex divide-x-2 items-center justify-center gap-6 my-5">
          {data?.images.map((item) => {
            return (
              <img src={item} width={100} height={100} alt="thumbnail image" />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default productDetails;
