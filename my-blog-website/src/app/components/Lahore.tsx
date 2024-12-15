import Image from "next/image";

function Lahore() {
  return (
    <main className="mt-4 flex flex-col items-center justify-center px-4">
      <div className="text-4xl mb-3 font-semibold font-mono text-center">
        <h1>Lahore The city of Love</h1>
      </div>
      {/* Image Container */}
      <div className="flex flex-wrap justify-center items-center gap-4">

        {/* First Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/lhr1.jpg"
            width={600}
            height={400}
            alt="Image 1"
          />
        </div>

        {/* Second Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/lhr2.jpg"
            width={600}
            height={400}
            alt="Image 2"
          />
        </div>

        {/* Third Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/lhr3.jpg"
            layout="responsive"
            width={600}
            height={400}
            objectFit="cover"
            alt="Image 3"
          />
        </div>

      </div>
      
      <br />
      
      <div className="text-justify max-w-4xl mx-auto">
        <p>
          Lahore (/ləˈhɔːr/ lə-HOR; Punjabi: لہور [lɔː˩˥ɾ]; Urdu: لاہور [laːˈɦɔːɾ] ⓘ) is the capital and largest city of the Pakistani province of Punjab. It is the second largest city in Pakistan, after Karachi, and 26th largest in the world, with a population of over 13 million. Located in central-eastern Punjab, along the River Ravi, it is the largest Punjabi-speaking city in the world. Lahore is one of Pakistan's major industrial, educational and economic hubs. It has been the historic capital and cultural centre of the wider Punjab region, and is one of Pakistan's most socially liberal, progressive, and cosmopolitan cities.
          {/* (continue your text here) */}
        </p>
      </div>

      {/* Button (optional) */}
      {/* <button className="mt-8 py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
        Back to Homepage
      </button> */}
    </main>
  );
}

export default Lahore;
