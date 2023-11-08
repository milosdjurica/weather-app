import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

import getAmPmTime from "@/utils/getAmPmTime";
import { ResponseData } from "@/types";
import Hours from "./Hours";

export function CurrentCard({ res }: { res: ResponseData }) {
  return (
    <Card
      className="flex max-w-full flex-col 
      items-center justify-between space-y-10 
      p-4 md:flex-row md:space-x-2 md:space-y-0"
    >
      <div className="flex flex-col  justify-between space-y-4 md:w-1/2">
        <h2 className="text-5xl font-bold">{res.location.name}</h2>
        <div className="text-xl text-muted-foreground">
          <h4>
            {res.location.localtime.split(" ")[1]}{" "}
            {getAmPmTime(res.location.localtime)}
          </h4>
          <h4>
            {res.location.region}, {res.location.country}
          </h4>
        </div>
        <div>
          <h2 className="text-7xl font-semibold">{res.current.temp_c}°C</h2>
          <div className="flex items-center space-x-5 text-2xl">
            <p>{res.current.condition.text}</p>
            <Image
              src={`https:${res.current.condition.icon}`}
              alt=""
              width={40}
              height={40}
            />
          </div>
        </div>
        <Button
          className="text-md w-[200px]"
          onClick={() => {
            /* // TODO open today forecast (open dropdown)  */
          }}
        >
          See today&#39;s forecast
        </Button>
      </div>
      <Hours day={0} res={res} />
    </Card>
  );
}
