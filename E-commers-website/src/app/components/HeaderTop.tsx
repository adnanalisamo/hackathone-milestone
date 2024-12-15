import Link from "next/link";

function HeaderTop() {
  return (
    <div className="w-full h-[80px] flex justify-center items-center border-b-2">
      <div className="w-full max-w-7xl px-4 h-full flex justify-between items-center">
        {/* Left side */}
        <div>
          <h1 className="text-3xl font-bold">Adnan Store</h1>
        </div>

        {/* Right side (Navigation) */}
        <div className="hidden md:flex">
          <ul className="flex gap-x-5 mr-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Sign up</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {/* Add a button or icon for a mobile menu (e.g., a hamburger icon) */}
          <button className="text-2xl">
            <span>&#9776;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;



