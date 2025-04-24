import React from "react";
import ravatar1 from "../../assets/avatar.svg";
import ravatar2 from "../../assets/avatar1.svg";
import ravatar3 from "../../assets/avatar2.svg";
import ravatar4 from "../../assets/avatar3.svg";
import { RiStarSFill } from "react-icons/ri";
import { useThemeStyle } from "../../hooks/useThemeStyle";
import { Button } from "../shared/Reuse";

const Review = () => {
  const reviews = [
    {
      avatar: ravatar4,
      name: "Emma R",
      title: "The Aspiring Writer",
      text: "I've always struggled with writer's block, but this app is like having a personal muse on demand. The creative prompts and mood-based inspiration features help me unlock new ideas effortlessly!",
    },
    {
      avatar: ravatar1,
      name: "Sofia M.",
      title: "The Overworked Designer",
      text: "As a graphic designer, burnout is real. This app helps me reset and find fresh inspiration with guided visual exercises and AI-generated mood boards. My workflow has never been smoother!",
    },
    {
      avatar: ravatar3,
      name: "Liam P.",
      title: "The Musician in a Rut",
      text: "I was stuck playing the same melodies over and over, but this AI suggested chord progressions and creative journaling exercises that reignited...",
    },
    {
      avatar: ravatar2,
      name: "Jordan K.",
      title: "The Stressed Entrepreneur",
      text: "Running a startup means I rarely get time for creative thinking. This app integrates mindfulness with ideation techniques...",
    },
  ];

  const bgClass = useThemeStyle("bg-black", "bg-white/10");

  return (
    <div className="flex justify-between flex-col lg:flex-row md:flex-row lg:w-[80%] md:w-[80%] w-[90%] mx-auto my-10">
      <div className="flex justify-between flex-wrap flex-col lg:flex-row md:flex-row lg:w-[52%] md:w-[52%] w-[95%] mx-auto lg:mx-0 md:mx-0 py-6  ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`
          lg:w-[47%] md:w-[50%] w-[100%]
          mx-auto p-5 py-8 border border-white/20 mb-4 
          rounded-xl self-start ${bgClass} 
          min-h-[320px] text-white
          ${index % 2 !== 1 ? "lg:mt-10" : ""}
        `}
          >
            <div className="flex items-center">
              <img
                src={review.avatar}
                alt="avatar profile"
                className="w-[50px] h-[50px] mr-5"
              />
              <p className="flex flex-col font-medium">
                {review.name}
                <span className="font-instrumentSerif font-normal text-[14px]">
                  {review.title}
                </span>
              </p>
            </div>
            <p className="my-4">{review.text}</p>
            <p className="flex items-center text-[#FFC046]">
              <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill />{" "}
              <RiStarSFill />
              <span className="text-white ml-3">5.0</span>
            </p>
          </div>
        ))}
      </div>
      <div className="lg:w-[40%] md:w-[40%] w-[100%] my-auto text-center lg:text-left md:text-left">
        <h2 className="text-[42px] lg:text-[56px] md:text-[56px] font-medium flex flex-col leading-12">
          Voices of Clarity{" "}
          <span className="text-[30px] lg:text-[40px] md:text-[40px] font-instrumentSerif italic">
            Creatives Share Their Journey
          </span>
        </h2>
        <p className="my-8">
          Real stories from creatives who found balance, inspiration, and
          support with Itura.
        </p>
        <Button className="bg-linear-to-r from-orange to-lightOrange rounded-xl text-white lg:w-[40%] md:w-[40%] w-[50%]">
        Join Forum
        </Button>
      </div>
    </div>
  );
};

export default Review;
