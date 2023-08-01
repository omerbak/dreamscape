import HeroSection from "@/components/sections/HeroSection";
import Destinations from "@/components/sections/Destinations";
import AboutSection from "@/components/sections/AboutSection";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WebsiteLoader from "@/components/WebsiteLoader";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className=" bg-darkBg ">
      <Nav />
      <WebsiteLoader />
      <HeroSection />
      <Destinations />
      <AboutSection />
      <Services />
      <Testimonials />
      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
