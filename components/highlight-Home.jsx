"use client";
import React from "react";

const highlightList = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Certifications",
    value: "50+",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "100",
  },
];

const HighlightHome = () => {
  return (
    <div className="pt-4 px-0 xl:gap-16 sm:pt-4 xl:px-16">
      <div className="sm:border-[#33353F] sm:border border rounded-md py-3 sm-px-20 px-0 flex flex-row items-center justify-between">
        {highlightList.map((highlight, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-xl sm:text-3xl font-bold flex flex-row">
                {highlight.prefix}
                {highlight.value}
                {highlight.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-xs sm:text-sm">{highlight.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightHome;