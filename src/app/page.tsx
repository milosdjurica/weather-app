"use client";

import { CurrentCard } from "@/components/CurrentCard";
import DailyDropdown from "@/components/DailyDropdown";
import Hours from "@/components/Hours";
import { useMyStore } from "@/store";

export default function Home() {
  // ! Instead of this, try to use async and then pass to the components below,
  // ! and when user clicks on link to daily for example, then create client component for button to click
  // ! and put in state there ???

  const [response] = useMyStore((state) => [state.response]);

  if (!response) return <>Loading....</>;

  return (
    <div className="flex flex-col items-center pt-10">
      <div
        className="flex w-[90%] flex-col items-center justify-between 
      space-y-10 md:w-4/5 md:flex-row md:space-x-10 md:space-y-0"
      >
        <CurrentCard res={response} />
      </div>
      {/* // TODO  maybe add calendar component to pick date */}
      {/* // TODO pull this hour forecast and next 4 hours */}
      {/* // TODO maybe graficon for all hours or next 3 days */}
      <DailyDropdown res={response} />
    </div>
  );
}
