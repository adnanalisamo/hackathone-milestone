import Image from "next/image";

function Islamabad() {
  return (
    <main className="mt-4 flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <div className="text-3xl sm:text-4xl mb-5 font-semibold font-mono text-center">
        <h1>Islamabad: The City of Greenery</h1>
      </div>

      {/* Image Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Image */}
        <div className="overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/isb1.webp"
            width={600}
            height={400}
            alt="Image 1"
          />
        </div>

        {/* Second Image */}
        <div className="overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/isb2.jpg"
            width={600}
            height={400}
            alt="Image 2"
          />
        </div>

        {/* Third Image */}
        <div className="overflow-hidden">
          <Image
            className="rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            src="/isb3.webp"
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
          Islamabad, Pakistan's capital city, stands as a testament to the country's progress, natural beauty, and cultural heritage. With its well-planned infrastructure, iconic landmarks, diplomatic presence, and harmonious integration of nature, Islamabad offers a unique experience for residents and visitors alike. 
        </p>
        <p className="mt-4">
          As Pakistan continues to grow and develop, Islamabad remains a shining example of a modern capital city that preserves the nation's cultural roots while embracing progress. One of the distinctive features of Islamabad is its meticulous urban planning. Designed by Greek architect Constantinos Apostolou Doxiadis, the city showcases a grid-based layout, well-connected road networks, and spacious green areas. The wide boulevards, landscaped parks, and tree-lined avenues create a refreshing ambiance and contribute to Islamabad's reputation as a clean and green city.
        </p>
        <p className="mt-4">
          Islamabad is home to several iconic landmarks that reflect both modern and traditional architectural styles. The Faisal Mosque, with its grand white facade and striking design, is one of the largest mosques in the world and serves as a symbol of Pakistan's Islamic heritage. The Pakistan Monument, shaped like a blooming flower, stands as a tribute to the country's national identity and history. Additionally, the Centaurus Mall, Shakarparian Park, and Rawal Lake are among the popular attractions that showcase the city's recreational and entertainment offerings.
        </p>
      </div>
    </main>
  );
}

export default Islamabad;

