import axios from "axios";
import { ResponseData } from "../types";

export default async function getForecast(query: string) {
  const options = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_URL,
    params: {
      q: query,
      days: "3",
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    const data: ResponseData = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
