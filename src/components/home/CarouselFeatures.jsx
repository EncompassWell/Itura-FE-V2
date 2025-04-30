import React, { useEffect, useState } from "react";
import markImg2 from "../../assets/mark.svg";
import markImg from "../../assets/marklogo.svg";
import { useThemeStyle } from "../../hooks/useThemeStyle";

const CarouselFeatures = () => {
  const themeColor = useThemeStyle("bg-black text-white", "bg-black/5");

  const slideItem = [
    {
      id: 1,
      title: "Remix & Reimagine",
      image: "./carousel1.svg",
      details:
        "Transform community-generated images or bring in your own, reshaping emotions into new creative expressions.",
    },
    {
      id: 2,
      title: "Sound Therapy, Tailored to You",
      image: "./carousel2.svg",
      details:
        "Let Itura suggest calming audio tracks to help you refocus, relax, and find your creative flow.",
    },
    {
      id: 3,
      title: "Personalized Wellness Guidance",
      image: "./carousel3.svg",
      details:
        "Talk to Itura’s AI to explore your emotions and discover activities or insights that bring balance to your mind.",
    },
    {
      id: 4,
      title: "Express Through Images",
      image: "./carousel4.svg",
      details:
        "Turn your feelings into visuals with our image generation tool—because sometimes, emotions are easier to express in pictures.",
    },
    {
      id: 5,
      title: "Share & Connect",
      image: "./carousel5.svg",
      details:
        "Save your images or share them with a like-minded creative community that understands the highs and lows of the journey.",
    },
    {
      id: 6,
      title: "Access to Professional Support",
      image: "./carousel6.svg",
      details:
        "When you need deeper guidance, Itura connects you with real therapists who specialize in creative well-being.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideItem.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto lg:my-40 md:my-30 my-10">
      <div className="flex text-center justify-center items-center mb-12">
        <div
          className={`p-3 border border-white/20 flex items-center justify-center w-[50px] h-[45px] rounded-lg mb-auto mr-4 shadow-lg -rotate-12 ${themeColor}`}
        >
          <img src={markImg} alt="" />
        </div>
        <h2 className="text-[28px] lg:text-[56px] md:text-[56px] font-medium leading-14">
          Nurture Your Creativity, <br className="hidden lg:block md:block" />{" "}
          One Feeling{" "}
          <span className="font-instrumentSerif italic"> at a Time.</span>
        </h2>
        <div
          className={`p-3 border border-white/20 flex items-center justify-center w-[50px] h-[45px] rounded-lg mt-auto mr-4 shadow-lg rotate-12 ${themeColor}`}
        >
          <img src={markImg2} alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row gap-10 items-center">
        <div className="lg:w-[50%] w-full transition-all duration-500 ease-in-out">
          <img
            src={slideItem[activeIndex].image}
            alt="Active feature"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="lg:w-[48%] md:w-[48%] lg:flex md:flex hidden flex-col items-start gap-6 relative">
          {slideItem.map((info, index) => {
            const isActive = index === activeIndex;
            const distance = Math.abs(index - activeIndex);

            const offset =
              index < activeIndex
                ? distance * 20
                : index > activeIndex
                ? distance * 20 
                : 0;

            const marginLeft = index < activeIndex ? `${offset}px` : "0px";
            const marginRight = index > activeIndex ? `${offset}px` : "0px";

            return (
              <div
                key={info.id}
                className={`transition-all duration-500 border border-white/20 rounded-3xl p-4 lg:p-6 w-full ${
                  isActive
                    ? "scale-105 opacity-100 z-10"
                    : "opacity-40 blur-[1px]"
                } ${themeColor}`}
                style={{
                  marginLeft,
                  marginRight,
                }}
              >
                <h3 className="font-medium mb-2">{info.title}</h3>
                <p className="text-white/65">{info.details}</p>
              </div>
            );
          })}
        </div>
        <div className="w-[100%] md:hidden lg:hidden flex flex-col items-start">
              <div
                className={`transition-all duration-500 border border-white/20 rounded-3xl p-4 lg:p-6 w-full ${themeColor}`}
              >
                <h3 className="font-medium mb-2">{slideItem[activeIndex].title}</h3>
                <p className="text-white/65">{slideItem[activeIndex].details}</p>
              </div>
         
        </div>
      </div>
    </div>
  );
};

export default CarouselFeatures;
