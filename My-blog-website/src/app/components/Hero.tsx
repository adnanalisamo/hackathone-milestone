import Image from "next/image";

function Hero() {
  return (
    <div className="bg-green-950 flex justify-center items-center h-screen relative">
      {/* Uncomment this if you want to display an image */}
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <Image src="/flag-2.jpg" layout="fill" objectFit="cover" alt="Hero Image" />
      </div> */}
      <div className="absolute z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-bounce">
          Welcome to My Blogs
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl mt-4 font-semibold">
          Let's explore the biggest cities of Pakistan
        </p>
      </div>
    </div>
  );
}

export default Hero;


