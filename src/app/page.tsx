"use client";

import { CurrentCard } from "@/components/CurrentCard";
import DailyDropdowns from "@/components/DailyDropdown";
import { useMyStore } from "@/store";

export default function Home() {
  const [response] = useMyStore((state) => [state.response]);

  if (!response) return <>Loading....</>;

  return (
    <div className="flex w-full flex-col items-center pt-10">
      <div
        className="flex w-[90%] flex-col items-center justify-between 
      space-y-10 md:w-4/5 md:flex-row md:space-x-10 md:space-y-0"
      >
        <CurrentCard res={response} />
      </div>
      <DailyDropdowns res={response} />
    </div>
  );
}
