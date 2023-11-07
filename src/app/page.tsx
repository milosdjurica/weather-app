"use client";

import { CurrentCard } from "@/components/CurrentCard";
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
      <div className=" space-y-10 md:space-y-0 md:space-x-10 flex flex-col md:flex-row md:w-4/5 w-[90%] items-center justify-between">
        <CurrentCard res={response} />
        <Hours res={response} />

        {/* // TODO  maybe add calendar component to pick date */}
        {/* // TODO pull this hour forecast and next 4 hours */}
        {/* // TODO maybe graficon for all hours or next 3 days */}
      </div>
    </div>
  );
}
