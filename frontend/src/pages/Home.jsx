import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import Process from "@/components/site/Process";
import Industries from "@/components/site/Industries";
import Testimonials from "@/components/site/Testimonials";
import Gallery from "@/components/site/Gallery";
import Faq from "@/components/site/Faq";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <main data-testid="home-page" className="bg-white text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Industries />
      <Testimonials />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
