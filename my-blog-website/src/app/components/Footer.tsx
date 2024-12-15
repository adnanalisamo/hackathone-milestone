import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black w-full  flex justify-center items-center h-screen">
      <div>
        <Image src="/footer.png" width={1100} height={300} alt="Heroimage" />
      </div>
    </div>
  );
}

export default Footer;