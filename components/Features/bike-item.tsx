import Image, { StaticImageData } from "next/image";
import Button from "../UI/button";

interface BikeItemProps {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
  index: number;
}

export default function BikeItem({
  title,
  description,
  img,
  index,
}: BikeItemProps) {
  const isOdd = index % 2 !== 0;

  return (
    <article className="flex flex-wrap w-full max-w-[100vw] flex-col md:flex-row">
      {isOdd ? (
        <>
          <div className="flex flex-col justify-center w-full md:w-1/2 p-4 order-2 md:order-1">
            <h2 className="text-xl md:text-3xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              {description}
            </p>
            <Button label="Buy now" />
          </div>
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src={img}
              alt={title}
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src={img}
              alt={title}
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2 p-4">
            <h2 className="text-xl md:text-3xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              {description}
            </p>
            <Button label="Buy now" />
          </div>
        </>
      )}
    </article>
  );
}
