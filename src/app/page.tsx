"use client";

import { CurrentCard } from "@/components/CurrentCard";
import { useMyStore } from "@/store";

export default function Home() {
  const [response] = useMyStore((state) => [state.response]);

  if (!response) return <>Something went wrong</>;

  return (
    <div className="flex flex-col items-center pt-10">
      {/* // TODO For search maybe use COMMAND component from ShadCN */}
      {/* // TODO ADD option to change from Celsius to Fs */}
      <CurrentCard res={response} />

      <div>
        {/* // TODO CARD to put Name, country, time, maybe something else */}
        {/* // TODO pull this hour forecast and next 4 hours */}
        {/* // TODO maybe graficon for all hours or next 3 days */}

        {/* // TODO add zustand for remembering the response and selected day/hour */}
      </div>
    </div>
  );
}
