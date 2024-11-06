import StreetRider from "@/assets/streetrider.png";
import ThunderBolt from "@/assets/thunderbolt.png";
import TrailBlazer from "@/assets/trailblazer.png";
import FeaturesGrid from "./bike-grid";
import { StaticImageData } from "next/image";

type Bike = {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
};

const bikesFeatures: Bike[] = [
  {
    id: 1,
    title: "StreetRider",
    description:
      "Embrace the perfect blend of style and performance. Conquer every journey with ease.",
    img: StreetRider,
  },
  {
    id: 2,
    title: "ThunderBolt",
    description:
      "Unleash the power within. Dominate the streets with unmatched agility and design.",
    img: ThunderBolt,
  },
  {
    id: 3,
    title: "TrailBlazer",
    description:
      "Elevate your riding experience. Precision engineering meets unparalleled comfort and control.",
    img: TrailBlazer,
  },
];

export default function Features() {
  return (
    <main
      id="features"
      className="flex flex-col items-center space-y-3 mt-20 px-4 md:px-8"
    >
      <h2 className="font-inter text-center text-primary-300 text-sm md:text-[16px] font-semibold leading-[24px] tracking-[0.005em]">
        Main Feature
      </h2>
      <h1 className="font-inter text-center text-bg-100 text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight tracking-[0.005em]">
        Discover The Perfect Ride
      </h1>
      <p className="font-inter text-center text-[16px] md:text-[18px] text-bg-200 font-medium leading-[24px] md:leading-[28px] tracking-[0.005em]">
        Explore the key features that make our bikes stand out from the crowd.
      </p>

      <FeaturesGrid bikes={bikesFeatures} />
    </main>
  );
}
