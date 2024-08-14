import ProductCard from "./ProductCard";

const GetProducts = async () => {
  let data;
  try {
    let response = await fetch("https://dummyjson.com/products");
    data = await response.json();
  } catch (e) {
    console.log(e);
  }
  let dataMaping = data?.products?.map((item) => {
    return <ProductCard item={item} />;
  });

  return (
    <div className="bg-white dark:bg-black">
      <div className="container py-10">
        {data?.products?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {dataMaping}
          </div>
        ) : (
          <h2 className=" capitalize text-5xl text-center">not found data</h2>
        )}
      </div>
    </div>
  );
};

export default GetProducts;
