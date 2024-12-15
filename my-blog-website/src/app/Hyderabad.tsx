import Image from "next/image";

function Hyderabad() {
  return (
    <main className="mt-4 flex flex-col items-center justify-center px-4">
      <div className="text-4xl mb-3 font-semibold font-mono text-center">
        <h1>Hyderabad The city of Winds</h1>
      </div>

      {/* Image Container */}
      <div className="flex flex-wrap justify-center items-center gap-4">

        {/* First Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/hyd-1.jpg"
            width={600}
            height={400}
            alt="Image 1"
          />
        </div>

        {/* Second Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/hyd-2.jpg"
            width={600}
            height={400}
            alt="Image 2"
          />
        </div>

        {/* Third Image */}
        <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/hyd-3.jpg"
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
          Hyderābād City (Haidarābād) (Sindhi: حیدرآباد, Urdu: حیدرآباد ), headquarters of the district of Sindh province of Pakistan traces its early history to Neroon, a Sindhi ruler of the area from whom the city derived its previous name, Neroon Kot. Its history dates back to medieval times, when Ganjo Takker (Barren Hill), a nearby hilly tract, was used as a place of worship. Lying on the most northern hill of the Ganjo Takker ridge, just east of the river Indus, it is the third largest city in the province and the eighth largest in the country with an expanse over three hillocks part of the most northerly hills of the Ganjo Takker range, 32 miles east of the Indus with which it is connected by various routes leading to Gidu Bandar.
          Hyderabad, as the historic capital of Sindh, is the centre of all the provincial communications: road, rail, waterways, and air. From the date of its foundation (1768), its manufactures—ornamented silks, silver- and gold-work, and lacquered ware—have been the chief in the province, and during its heyday, they gained prizes at the industrial exhibitions of Europe. Some noteworthy antiquities are the tombs of the Kalhora jagirani and Talpur rulers.
        </p>
      </div>

      {/* Button (optional) */}
      {/* <button className="mt-8 py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
        Back to Homepage
      </button> */}
    </main>
  );
}

export default Hyderabad;
