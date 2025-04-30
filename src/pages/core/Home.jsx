import React, { useContext } from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import { ThemeContext } from "../../context/ThemeProvider";
import Hero from "../../components/home/Hero";
import Review from "../../components/home/Review";
import FAQ from "../../components/home/FAQ";
import Features from "../../components/home/Features";
import ScrollButton from '../../components/shared/ScrollButton'
import CarouselFeatures from "../../components/home/CarouselFeatures";
import TopArt from "../../components/home/TopArt";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";
  return (
    <main className="relative">
      <Header />
      {isDark && (
          <div className="w-[706px] h-[353px] bg-linear-to-b from-gradientYellow to-gradientRed blur-[315px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 lg:z-0 md:z-0 -z-10"></div> 
      )}
      <Hero />
      <TopArt />
      <CarouselFeatures />
      <Features />
      <FAQ />
      <Review />
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default Home;
