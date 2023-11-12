import { Hour } from "@/types";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import HourDialogContent from "./HourDialogContent";

export default function HourCard({ hour }: { hour: Hour }) {
  return (
    <Dialog>
      <DialogTrigger
        className="flex flex-col items-center 
      rounded-md text-center shadow-md shadow-primary transition ease-in hover:scale-105
      "
      >
        <div
          className="flex min-w-[120px] flex-1 flex-col
        items-center justify-between space-y-4 border-b
      border-primary p-4"
        >
          <Image
            src={`https:${hour.condition.icon}`}
            alt=""
            width={40}
            height={40}
          />
          <h3 className="font-bold">{hour.temp_c}°C</h3>
          <p className="flex-1">{hour.condition.text}</p>
        </div>
        <h4 className="py-1">{hour.time.split(" ")[1]}</h4>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h4>{hour.time.split(" ")[1]}h</h4>
          </DialogTitle>
          <DialogDescription>
            <p>{hour.time.split(" ")[0].split("-").reverse().join("/")}</p>
          </DialogDescription>
        </DialogHeader>
        <HourDialogContent hour={hour} />
      </DialogContent>
    </Dialog>
  );
}
