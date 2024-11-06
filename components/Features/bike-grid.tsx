import BikeItem from "./bike-item";
import { StaticImageData } from "next/image";

type Bike = {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
};

interface FeaturesGridProps {
  bikes: Bike[];
}

export default function FeaturesGrid({ bikes }: FeaturesGridProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <ul className="space-y-6">
        {bikes.map((bike, index) => (
          <li key={bike.id} className="w-full">
            <BikeItem {...bike} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}
