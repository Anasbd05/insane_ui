import Banner from "@/components/Banner";
import CallAction from "@/components/CallAction";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Products />
      <Faqs />
      <CallAction />
      <Footer />
    </div>
  )
}