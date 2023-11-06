import { useMyStore } from "@/store";
import { Hour } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HourCard({ hour }: { hour: Hour }) {
  const [daySelected, setHourSelected] = useMyStore((state) => [
    state.daySelected,
    state.updateHourSelected,
  ]);

  return (
    <Link
      onClick={() => setHourSelected(hour.time.split(" ")[1])}
      href={`/${daySelected}/${hour.time.split(" ")[1]}`}
      className="shadow-md shadow-primary rounded-md 
      flex items-center flex-col text-center
      "
    >
      <div
        className="p-4 min-w-[120px] space-y-4 flex-1
      flex justify-between items-center flex-col
      border-b border-primary"
      >
        <Image
          src={`https:${hour.condition.icon}`}
          alt=""
          width={40}
          height={40}
        />
        <h3 className="font-bold ">{hour.temp_c} C</h3>
        <p className="flex-1">{hour.condition.text}</p>
      </div>
      <h4 className="py-1">{hour.time.split(" ")[1]}</h4>
    </Link>
  );
}
