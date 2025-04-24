import React, { useContext } from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import { ThemeContext } from "../../context/ThemeProvider";
import Hero from "../../components/home/Hero";
import Review from "../../components/home/Review";
import FAQ from "../../components/home/FAQ";
import Features from "../../components/home/Features";
import ScrollButton from '../../components/shared/ScrollButton'

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";
  return (
    <main className="relative">
      <Header />
      {isDark && (
          <div className="w-[706px] h-[353px] bg-linear-to-b from-gradientYellow to-gradientRed blur-[315px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 z-0"></div> 
      )}
      <Hero />
      <Features />
      <FAQ />
      <Review />
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default Home;
