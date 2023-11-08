import { ResponseData } from "@/types";
import React from "react";

export default function DailyDropdown({ res }: { res: ResponseData }) {
  return (
    <div>
      {res.forecast.forecastday.map((day) => (
        <div key={day.day.avgtemp_f}>
          <h3>{day.day.avgtemp_c}</h3>
        </div>
      ))}
      <h1>{res.forecast.forecastday[0].day.condition.text}</h1>
    </div>
  );
}
