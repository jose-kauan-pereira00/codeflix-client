import Image from "next/image";

type MovieRowProps = {

  sectionTitle: string;

};

type MovieCardProps = {

  index: number;

};

const MovieCard = ({index} : MovieCardProps ) => (
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
        className="object-cover" />
  </div>
)

export function MovieRow({sectionTitle} : MovieRowProps) {

  return (
    <div className="flex flex-col space-y-4 mt-8 w-full">
      <div className="flex">
        <h2 className="inline-flex items-center text-2xl font-bold">
          {sectionTitle}
        </h2>
      </div>

      <div className="w-full overflow-x-auto scrollb
               [&::-webkit-scrollbar]:hidden 
              [-ms-overflow-style:none]">

        <div className="flex space-x-4 pb-4 w-max">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <MovieCard key={index} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
