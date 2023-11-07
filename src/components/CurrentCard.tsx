import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResponseData } from "@/types";
import { Button } from "./ui/button";
import Image from "next/image";

export async function CurrentCard({ res }: { res: ResponseData }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-5xl">{res.location.name}</CardTitle>
        <div className="text-xl text-muted-foreground">
          <h4>
            {res.location.localtime.split(" ")[1]}{" "}
            {Number(res.location.localtime.split(" ")[1].split(":")[0]) >= 12
              ? "PM"
              : "AM"}
          </h4>
          <h4>
            {res.location.region}, {res.location.country}
          </h4>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <h2 className="text-7xl font-semibold">{res.current.temp_c}°C</h2>
          <div className="text-2xl flex items-center space-x-5">
            <p>{res.current.condition.text}</p>
            <Image
              src={`https:${res.current.condition.icon}`}
              alt=""
              width={40}
              height={40}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>See today&#39;s forecast</Button>
      </CardFooter>
    </Card>
  );
}
