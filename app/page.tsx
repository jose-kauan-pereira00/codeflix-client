import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-linear-to-b from-0% to-black relative h-screen lg:h-[140vh] overflow-hidden">
      <Header />
        <main className="relative pb-24 pl-4  lg:pl-16">
      
            <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
              <div className="absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black">
                <Image
                src='/banner2.jpg'
                alt=" The Witcher"
                fill={true}
                className="h-[65vh] object-cover"
                />
                
              </div>
              
              <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                The Witcher
              </h1>
              <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
                Geral of Rivia, a solitary monster hunter, struggles to find his
                places in world where people often prove more wicked than beasts.
              </p> 
            </div>

            <div className="flex space-x-3">
              <button className="
                bg-white text-black md:text-xl flex cursor-pointer items-center 
                gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition
                hover:opacity-75 nd:px-8 md:py-2.5">
                Play
                </button>
              <button className="
                bg-red-500 text-black md:text-xl flex cursor-pointer items-center 
                gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition
                hover:opacity-75 nd:px-8 md:py-2.5">
                More Info
                </button>
                
            </div>
           
        </main>
    </div>
  );
}
