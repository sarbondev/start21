import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Courses from "@/components/sections/Courses";
import Method from "@/components/sections/Method";
import Results from "@/components/sections/Results";
import Branches from "@/components/sections/Branches";
import Faq from "@/components/sections/Faq";
import Register from "@/components/sections/Register";
import FinalCta from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Stats />
        <WhyUs />
        <Courses />
        <Method />
        <Results />
        <Branches />
        <FinalCta />
        <Register />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
