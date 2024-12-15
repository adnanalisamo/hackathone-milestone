import Image from "next/image";

function Sukkur() {
  return (
    <main className="mt-4 flex flex-col items-center justify-center px-4">
      <div className="text-4xl mb-3 font-semibold font-mono text-center">
        <h1>Sukkur The city of Peace</h1>
      </div>

      {/* Image Container */}
      <div className="flex flex-wrap justify-center items-center gap-4">

        {/* First Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/sk.jpg"
            width={600}
            height={400}
            alt="Image 1"
          />
        </div>

        {/* Second Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/sk-1.jpg"
            width={600}
            height={400}
            alt="Image 2"
          />
        </div>

        {/* Third Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/sk-3.jpg"
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
          Sukkur (Sindhi: سکر‎; Urdu: سكھر) is a city in the Pakistani province of Sindh along the western bank of the Indus River, directly across from the historic city of Rohri. Sukkur is the third largest city in Sindh after Karachi and Hyderabad, and 14th largest city of Pakistan by population. The city was originally founded by the Rai dynasty of Sindh. The modern city was built in the 1840s. New Sukkur was established during the British era alongside the village of Sukkur. Sukkur's hill, along with the hill on the river island of Bukkur, form what is sometimes considered the "Gate of Sindh".
          The region around Sukkur has been inhabited for millennia. The ruins of Lakhan-jo-daro, located near an industrial park on the outskirts of Sukkur, date from the Mature Harappan period of the Indus Valley Civilization, between 2600 BCE and 1900 BCE, covering more than 300 hectares of area and is touted to be the second largest city of the Indus Valley Civilization, just 75 kilometers away from another major city of the Indus Valley Civilization, Mohenjo Daro.
          By the 12th Century, Rohri and Sukkur had been incorporated in the dominion of the Bhati Rajputs.
        </p>
      </div>

      {/* Button (optional) */}
      {/* <button className="mt-8 py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
        Back to Homepage
      </button> */}
    </main>
  );
}

export default Sukkur;
