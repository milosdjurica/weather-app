"use client";

import { useMyStore } from "@/store";
import { ResponseData } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";
import HourCard from "./HourCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

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
    <Card className=" w-[90%] md:w-2/3 lg:w-2/3">
      <CardHeader>
        <CardTitle className="text-2xl">Hourly forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative group">
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
      </CardContent>
    </Card>
  );
}
