import Link from "next/link";

function HeaderTop() {
  return (
    <div className="w-full h-[80px] flex justify-center items-center border-b-2 bg-slate-300">
      <div className="w-[90%] md:w-[80%] h-full flex justify-between items-center">
        {/* left side */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold rounded-full shadow-black bg-red-950 text-white px-3 py-1">
            Adnan Blogs
          </h1>
        </div>
        {/* right side */}
        <div className="text-base md:text-xl font-semibold">
          <ul className="hidden md:flex gap-x-5">
            <li>
              <Link href="/Karachi.tsx">Home</Link>
            </li>
            <li>
              <Link href="./">Karachi</Link>
            </li>
            <li>
              <Link href="/">Hyderabad</Link>
            </li>
            <li>
              <Link href="/">Sukkur</Link>
            </li>
            <li>
              <Link href="/">Islamabad</Link>
            </li>
            <li>
              <Link href="/">Lahore</Link>
            </li>
          </ul>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-lg">☰</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;



