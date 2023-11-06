"use client";

import { useMyStore } from "@/store";
import React from "react";

export default function HourForecast() {
  const [daySelected, hourSelected] = useMyStore((state) => [
    state.daySelected,
    state.hourSelected,
  ]);

  return (
    <div>
      <h1>Welcome to day and hour</h1>
      <div>
        {hourSelected} {daySelected}
      </div>
    </div>
  );
}
