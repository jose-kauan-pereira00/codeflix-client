import Image from "next/image";
import Header from "./components/Header";
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="bg-linear-to-b from-0% to-black relative h-screen lg:h-[140vh] overflow-hidden">
      <Header />
        <main className="relative pb-24 pl-4 lg:pl-16 pr-4 lg:pr-16 w-full">
      
            <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
              <div className="absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black">
                <Image
                src='/banner2.jpg'
                alt="The Witcher"
                fill={true}
                className="h-[65vh] object-cover"
                />
              </div>
              
              <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                The Witcher
              </h1>
              <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
                Geralt of Rivia, a solitary monster hunter, struggles to find his
                place in a world where people often prove more wicked than beasts.
              </p> 
            </div>

            <div className="flex space-x-3">
              <button className="
                bg-white text-black md:text-xl flex cursor-pointer items-center 
                gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition
                hover:opacity-75 md:px-8 md:py-2.5">
                <PlayIcon className="h-6"/>
                Play
                </button>
              <button className="
                bg-red-500 text-black md:text-xl flex cursor-pointer items-center 
                gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition
                hover:opacity-75 md:px-8 md:py-2.5">
                <InformationCircleIcon className="h-6" />
                More Info
                </button>
            </div>

            <div className="flex flex-col space-y-4 mt-8 w-full">
              <div className="flex">
                  <h2 className="inline-flex items-center text-2xl font-bold">Featured</h2>
              </div>

              <div className="w-full overflow-x-auto scrollbar-hide
               [&::-webkit-scrollbar]:hidden 
              [-ms-overflow-style:none]">
                
                <div className="flex space-x-4 pb-4 w-max">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div 
                      key={index} 
                      className="h-28 min-w-50 group relative transition 
                      duration-200 ease-in transform sm:h-36 
                      hover:scale-110 md:h-40 md:min-w-75 lg:h-52 
                      lg:min-w-100 hover:z-50 shrink-0 rounded overflow-hidden bg-zinc-800
                      bg-linear-to-t from-transparent to-black"
                    >
                      <Image
                        src={`/images/item_${index}.jpg`}
                        fill={true}
                        alt={`Movie ${index}`}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>
           
        </main>
    </div>
  );
}