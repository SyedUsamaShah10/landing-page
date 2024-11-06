import Image from "next/image";
import Button from "../UI/button";
import BikeImg from "@/assets/img1.png";

function Hero() {
  return (
    <main className="flex flex-col items-center space-y-8 mt-12 mb-12 px-6 md:px-12">
      <h1 className="font-inter text-4xl md:text-6xl font-bold leading-tight tracking-wide text-bg-100 flex flex-col items-center text-center">
        <span>Ride with passion</span>
        <span>Ride with us</span>
      </h1>

      <p className="font-inter text-lg md:text-xl text-bg-100 text-center">
        Experience the thrill of the open road with our premium selection of
        bikes.
      </p>

      <Button label="Buy Now" variant="filled" />

      <div className="relative inline-block mt-6">
        <div className="absolute inset-0 rounded-full bg-primary-100 opacity-80 blur-[50px] shadow-[inset_0px_3px_3px_rgba(0,0,0,0.25)]"></div>
        <Image
          src={BikeImg}
          alt="Premium bike"
          width={875.88}
          height={503.84}
          layout="intrinsic"
          className="relative z-10 rounded-lg shadow-lg"
        />
      </div>
    </main>
  );
}

export default Hero;
