import Image from "next/image";
import Avatar from "@/assets/avatar.png";

function Testimonial() {
  return (
    <div id="testimonials" className="flex flex-col items-center mt-12">
      <Image
        src={Avatar}
        className="w-custom-70 h-custom-70  rounded-full"
        alt="This is an avatar"
      />
      <p className="font-inter text-[20px] mt-2 text-bg-100 font-bold leading-[28px] tracking-[0.005em] text-center">
        John S
      </p>
      <p className="font-sans text-[18px] text-bg-300 font-normal leading-[28px] tracking-[0.005em] text-center">
        Position, Company name
      </p>
      <p className="font-sans text-[30px] mt-4 font-semibold leading-[36px] tracking-[0.005em] text-center">
        &ldquo;Absolutely love my ThunderBolt! Smooth ride, sleek design, and
        <br />
        unbeatable performance&rdquo; <br /> - John S.
      </p>
    </div>
  );
}

export default Testimonial;
