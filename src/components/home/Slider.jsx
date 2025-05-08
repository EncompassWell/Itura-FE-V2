import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useThemeStyle } from "../../hooks/useThemeStyle";

const slides = [
  "./art1.svg",
  "./art2.svg",
  "./art3.svg",
  "./art4.svg",
  "./art5.svg",
  "./art6.svg",
  "./art7.svg",
];

const total = slides.length;
const radius = 1000;
const degreesPerSlide = 22;
const intervalTime = 2500;

const Slider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative w-[100%] mx-auto h-[400px] overflow-hidden">
        <div className=" w-[100%] h-[100%]">
          {[...Array(total * 2)].map((_, i) => {
            const virtualIndex = i - total; 
            const actualIndex = ((virtualIndex % total) + total) % total;
            const rotate = virtualIndex * degreesPerSlide - (position * degreesPerSlide);

            return (
              <motion.div
                key={i}
                className="absolute flex justify-center items-center h-full w-full"
                style={{
                  transformOrigin: `50% ${radius}px`,
                }}
                animate={{
                  rotate,
                }}
                transition={{
                  ease: "easeOut",
                  duration: 0.6,
                }}
              >
                <img
                  src={slides[actualIndex]}
                  alt={`art-${actualIndex}`}
                  className="w-[200px] h-[300px] object-cover rounded-2xl shadow-md"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider