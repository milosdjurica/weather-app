import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";

import { ForecastDay } from "@/types";

export default function DailyCard({
  forecastDay,
}: {
  forecastDay: ForecastDay;
}) {
  const day = forecastDay.day;

  return (
    <Tabs
      defaultValue="basic"
      className="w-full font-semibold md:w-[90%] lg:w-1/3"
    >
      <TabsList className="w-full">
        <TabsTrigger value="basic" className="w-1/2">
          Info
        </TabsTrigger>
        <TabsTrigger value="more" className="w-1/2">
          More
        </TabsTrigger>
      </TabsList>
      <TabsContent value="basic">
        <Card className="border-2 border-primary">
          <div className="gridStyle grid grid-cols-1 gap-4 p-2 text-center">
            <div>
              <h5>Avg temp:</h5>
              <h4>{day.avgtemp_c}°C</h4>
            </div>

            <div>
              <h5>Min temp:</h5>
              <h4>{day.mintemp_c}°C</h4>
            </div>

            <div>
              <h5>Max temp:</h5>
              <h4>{day.maxtemp_c}°C</h4>
            </div>

            <div>
              <h5>Humidity:</h5>
              <h4>{day.avghumidity}%</h4>
            </div>

            <div>
              <h5>Chance of rain:</h5>
              <h4>{day.daily_chance_of_rain}%</h4>
            </div>

            <div>
              <h5>Chance of snow:</h5>
              <h4>{day.daily_chance_of_snow}%</h4>
            </div>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="more">
        <Card className="border-2 border-primary">
          <div className="gridStyle grid grid-cols-1 gap-4 p-2 text-center">
            <div>
              <h5>Description:</h5>
              <h4>{day.condition.text}</h4>
            </div>

            <div>
              <h5>Visibility:</h5>
              <h4>{day.avgvis_km}km</h4>
            </div>

            <div>
              <h5>Max wind:</h5>
              <h4>{day.maxwind_kph}kph</h4>
            </div>

            <div>
              <h5>Total precip:</h5>
              <h4>{day.totalprecip_mm}mm</h4>
            </div>

            <div>
              <h5>Total snow:</h5>
              <h4>{day.totalsnow_cm}cm</h4>
            </div>

            <div>
              <h5>UV:</h5>
              <h4>{day.uv}</h4>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
