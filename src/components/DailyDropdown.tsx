import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ResponseData } from "@/types";
import React from "react";
import HourCard from "./HourCard";
import Image from "next/image";
import Hours from "./Hours";
import DailyCard from "./DailyCard";

export default function DailyDropdown({ res }: { res: ResponseData }) {
  return (
    <div className="mt-10 w-[90%] space-y-2 md:w-[80%]">
      {res.forecast.forecastday.map((day, index) => (
        <Accordion
          key={day.date_epoch}
          type="single"
          collapsible
          className="rounded-md border border-primary px-5"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="grid w-full grid-cols-5 gap-10">
              <h3 className=" text-center">
                {index === 0 ? "Today" : index === 1 ? "Tomorrow" : "Day after"}
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
              <div className="flex flex-col items-center justify-between lg:flex-row">
                <DailyCard forecastDay={res.forecast.forecastday[index]} />
                <Hours day={index} res={res} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <h1>{res.forecast.forecastday[0].day.condition.text}</h1>
    </div>
  );
}
