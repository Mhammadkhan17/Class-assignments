import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="w-screen">
      <h1 className="m-8 text-blue-700 md:text-red-600 lg:text-yellow-400 text-center font-extrabold text-3xl md:text-6xl lg:text-6xl">
        Toyota Corolla
      </h1>
      <div className="flex flex-row h-svw bg-white">
        <div className="w-fit md:max-w-screen-lg">
          <p className="text-xs md:text-lg text-justify">
            <p className="text-2xl md:text-6xl text-center py-6">About</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            inventore necessitatibus vel eligendi quod ab cupiditate. Tempore
            magni, voluptatem natus ab expedita tempora mollitia odio sapiente
            laborum, sit eos! Quae! simos in ducimus autem excepturi similique
            architecto nesciunt ea laborum nemo expedita eligendi fugit a
            asperiores, officiis eius. Facere labore nobis molestias?
          </p>
        </div>
        <div className="w-11/12 flex justify-end">
          <Image
            src="/Corolla.png"
            width={300}
            height={400}
            className="md:mx-24"
            alt="Corolla"
          />
        </div>
      </div>
      <div className="flex justify-center mb-3">
      <button className="mt-10 px-10 py-4 bg-blue-600 text-white rounded-full">
        Buy Now
      </button>
      </div>

      <h1 className="m-8 text-blue-700 md:text-red-600 lg:text-yellow-400 text-center font-extrabold text-3xl md:text-6xl lg:text-6xl">
        Toyota Corolla
      </h1>
      <div className="flex flex-row h-svw bg-white">
        <div className="w-fit md:max-w-screen-lg">
          <p className="text-xs md:text-lg text-justify">
          <p className="text-2xl md:text-6xl text-center py-6">About</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            inventore necessitatibus vel eligendi quod ab cupiditate. Tempore
            magni, voluptatem natus ab expedita tempora mollitia odio sapiente
            laborum, sit eos! Quae! simos in ducimus autem excepturi similique
            architecto nesciunt ea laborum nemo expedita eligendi fugit a
            asperiores, officiis eius. Facere labore nobis molestias?
          </p>
        </div>
        <div className="w-11/12 flex justify-end">
          <Image
            src="/Corolla.png"
            width={300}
            height={400}
            className="md:mx-24"
            alt="Corolla"
          />
        </div>
      </div>
      <div className="flex justify-center mb-3">
      <button className="mt-10 px-10 py-4 bg-blue-600 text-white rounded-full">
        Buy Now
      </button>
      </div>
    </div>
  );
}
