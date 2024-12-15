import Image from "next/image";

function Hero() {
  return (
    <div className="w-full flex justify-center items-center h-auto px-4 py-8">
      <div className="w-full max-w-7xl">
        <Image
          src="/baner-3.png"
          width={1200}
          height={400}
          alt="Hero Image"
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Hero;


