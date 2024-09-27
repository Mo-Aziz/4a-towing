// import Header from "@/components/Header";
import AboutUs from "@/components/Aboutus";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar/Navbar";
import Popular from "@/components/Popular";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <div className=" h-[80rem] md:h-[50rem] lg:h-[25rem] xl:h-[15rem]"></div>
        <AboutUs />
        <div className=" h-[55rem] md:h-[50rem] lg:h-[25rem] xl:h-[15rem]"></div>
        <Popular />
        <div className=" h-[80rem] md:h-[50rem] lg:h-[25rem] xl:h-[30rem]"></div>
        <Reviews />
      </main>
      {/* <Header /> */}

      <Footer />
    </>
  );
}
