import Faq from "@/components/Faq/faq";
import Features from "@/components/Features/features";
import Hero from "@/components/Hero/hero";
import Testimonial from "@/components/Testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonial />
      <Faq />
    </>
  );
}
