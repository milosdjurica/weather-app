import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ResponseData } from "@/types";
import React from "react";
import Image from "next/image";
import Hours from "./Hours";
import DailyCard from "./DailyCard";

export default function DailyDropdowns({ res }: { res: ResponseData }) {
  return (
    <div className="mt-10 w-[90%] space-y-2 md:w-[80%]">
      {res.forecast.forecastday.map((day, index) => (
        <Accordion
          key={day.date_epoch}
          type="single"
          collapsible
          className="rounded-md border-2 border-primary px-2 md:px-5"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="grid w-full grid-cols-5 gap-10">
              <h3 className="text-center font-semibold md:text-lg">
                {day.date
                  .split("-")
                  .reverse()
                  .filter((el) => el.length < 3)
                  .join("/")}
              </h3>

              <Image
                src={`https:${day.day.condition.icon}`}
                alt={day.day.condition.text}
                width={30}
                height={30}
              />
              <h4>{day.day.avgtemp_c} C</h4>
              <div>{day.day.daily_chance_of_rain}%</div>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="mt-5 flex flex-col 
                items-center justify-between space-y-10 
                p-2 md:p-0 lg:flex-row lg:space-x-5 lg:space-y-0"
              >
                <DailyCard forecastDay={res.forecast.forecastday[index]} />
                <Hours hours={res.forecast.forecastday[index].hour} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
