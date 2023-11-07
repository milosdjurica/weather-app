"use client";

import { useMyStore } from "@/store";
import { ResponseData } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";
import HourCard from "./HourCard";

export default function Hours({ res }: { res: ResponseData }) {
  const daySelected = useMyStore((state) => state.daySelected);

  const hoursArray = res.forecast.forecastday[daySelected].hour;

  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  function handleClick(direction: "left" | "right") {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth + 60
          : scrollLeft + clientWidth - 60;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }

  return (
    <div className="w-[90%] md:w-1/2 border border-white">
      <h2>Hourly forecast</h2>

      <div className="relative group ">
        <ArrowLeft onClick={() => handleClick("left")} />
        <div
          ref={rowRef}
          className="flex space-x-2 p-2 md:p-4 rounded-lg
          border-2 border-blue-900 overflow-x-scroll scrollbar-hide"
        >
          {hoursArray.map((hour, index) => {
            // TODO add UUID for keys
            return <HourCard key={hour.chance_of_rain} hour={hour} />;
          })}
        </div>
        <ArrowRight onClick={() => handleClick("right")} />
      </div>
    </div>
  );
}
