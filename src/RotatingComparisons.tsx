import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type Props = {};
const RotatingComparisons: React.FC<Props> = () => {
  const comparisons = [
    [
      "what is the population of the United States?",
      "how many people live in the USA?"
    ],
    ["Heart Doctor in New York", "Cardiologist around NYC"],
    [
      "How many calories in a hamburger?",
      "What is the nutrition ingrediants in a burger?"
    ]
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentComparison = comparisons[currentIndex];
  const typistConfig = {
    avgTypingDelay: 30,
    startDelay: 25
  };

  // @ts-ignore
  const next = () => {
    setCurrentIndex((i) => {
      if (i < comparisons.length - 1) {
        return i + 1;
      } else {
        return 0;
      }
    });
  };

  const prev = () => {
    setCurrentIndex((i) => {
      if (i > 0) {
        return i - 1;
      } else {
        return comparisons.length - 1;
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, next]);

  return (
    <div className="text-center my-4 bg-blue-100 text-xl flex rounded italic">
      <div
        className="flex items-center text-blue-300 text-4xl hover:bg-blue-200 cursor-pointer"
        onClick={prev}
      >
        <MdChevronLeft />
      </div>
      <div className="flex-grow py-4 text-blue-900" key={currentIndex}>
        <Typist {...typistConfig}>{currentComparison[0]}</Typist>
        <div className="h-2 mb-5 text-lg text-blue-300 text-uppercase font-bold">
          vs
        </div>
        <Typist {...typistConfig}>{currentComparison[1]}</Typist>
      </div>
      <div
        className="flex items-center text-blue-300 text-4xl hover:bg-blue-200 cursor-pointer"
        onClick={next}
      >
        <MdChevronRight />
      </div>
    </div>
  );
};

export default RotatingComparisons;
