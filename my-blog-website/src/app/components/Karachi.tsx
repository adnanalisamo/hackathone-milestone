import Image from "next/image";

function Karachi() {
  return (
    <main className="mt-4 flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <div className="text-3xl sm:text-4xl mb-5 font-semibold font-mono text-center">
        <h1>Karachi: The City of Lights</h1>
      </div>

      {/* Image Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Image */}
        <div className="overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/khi-1.jpg"
            width={600}
            height={400}
            alt="Image 1"
          />
        </div>

        {/* Second Image */}
        <div className="overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/khi-2.jpg"
            width={600}
            height={400}
            alt="Image 2"
          />
        </div>

        {/* Third Image */}
        <div className="overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/khi-3.jpg"
            layout="responsive"
            width={600}
            height={400}
            objectFit="cover"
            alt="Image 3"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-6 text-justify text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl">
        <p>
          Karachi (/kəˈrɑːtʃi/; Urdu: کراچی; Sindhi: ڪراچي‎; IPA: [kəˈraːtʃi]) is
          the capital city of the Pakistani province of Sindh. It is the largest
          city in Pakistan and the 12th largest in the world, with a population
          of over 20 million. Karachi is one of the world's fastest-growing
          cities and has significant communities representing almost every
          ethnic group in Pakistan.
        </p>
        <p className="mt-4">
          Known as the "City of Lights" in the 1960s and 1970s for its vibrant
          nightlife, Karachi is Pakistan's premier industrial and financial
          center. The city collects 35% of Pakistan's tax revenue and generates
          approximately 25% of Pakistan's entire GDP.
        </p>
        <p className="mt-4">
          Karachi is also considered Pakistan's fashion capital and is home to
          iconic landmarks such as the Port of Karachi, Jinnah International
          Airport, and the vibrant Clifton Beach.
        </p>
      </div>

      {/* Back to Homepage Button */}
      <button className="mt-8 py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
        Back to Homepage
      </button>
    </main>
  );
}

export default Karachi;


