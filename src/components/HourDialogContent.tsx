import { Hour } from "@/types";
import React from "react";

export default function HourDialogContent({ hour }: { hour: Hour }) {
  return (
    <div className="gridStyle grid grid-cols-2 gap-3">
      <div>
        <h5>Temp: </h5>
        <h5>{hour.temp_c}°C</h5>
      </div>
      <div>
        <h5>Feels like: </h5>
        <h5>{hour.feelslike_c}°C</h5>
      </div>
      <div>
        <h5>Humidity: </h5>
        <h5>{hour.humidity}%</h5>
      </div>
      <div>
        <h5>Cloud: </h5>
        <h5>{hour.cloud}%</h5>
      </div>
      <div>
        <h5>Chance of rain: </h5>
        <h5>{hour.chance_of_rain}%</h5>
      </div>
      <div>
        <h5>Precipitation: </h5>
        <h5>{hour.precip_mm}mm</h5>
      </div>
      <div>
        <h5>Pressure: </h5>
        <h5>{hour.pressure_mb}mb</h5>
      </div>
      <div>
        <h5>Visibility: </h5>
        <h5>{hour.vis_km}km</h5>
      </div>
      <div>
        <h5>Chance of snow: </h5>
        <h5>{hour.chance_of_snow}%</h5>
      </div>
      <div>
        <h5>Heat index: </h5>
        <h5>{hour.heatindex_c}</h5>
      </div>
      <div>
        <h5>Wind speed: </h5>
        <h5>{hour.wind_kph}km/h</h5>
      </div>
      <div>
        <h5>Wind direction: </h5>
        <h5>{hour.wind_dir}</h5>
      </div>
    </div>
  );
}
