import Image from "next/image";

function Product() {
  return (
    <main>
      <div className="w-full flex justify-center items-center h-auto px-4 mb-10">
        <div className="w-full max-w-7xl">
          <Image
            className="mx-auto"
            src="/product.png"
            width={1100}
            height={1000}
            alt="Product Image"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      
      {/* Uncomment if you want to add a button */}
      {/* <button className="py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 mt-8 mx-auto block">View All Products</button> */}
    </main>
  );
}

export default Product;

