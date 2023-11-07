import { Hour } from "@/types";
import React from "react";

export default function HourCard({ hour }: { hour: Hour }) {
  return (
    <div className="min-w-[200px] h-[200px]">
      <h3>{hour.time.split(" ")[1]}</h3>
      <h3>{hour.temp_c} C</h3>
    </div>
  );
}
