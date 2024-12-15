import Image from "next/image";

function Sale() {
  return (
    <main>
      <div className="w-full flex justify-center items-center h-auto px-4 py-8">
        <div className="w-full max-w-7xl">
          <Image
            className="mx-auto"
            src="/sale-pic.png"
            width={1300}
            height={1000}
            alt="Sale Image"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      
      <button className="py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 mt-8 mx-auto block">
        View All Products
      </button>
    </main>
  );
}

export default Sale;
