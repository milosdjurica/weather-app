import { create } from "zustand";
import { ResponseData } from "./types";

type State = {
  city: string;
  response: ResponseData | undefined;
};

type Action = {
  updateCity: (city: State["city"]) => void;
  updateResponse: (response: State["response"]) => void;
};

export const useMyStore = create<State & Action>((set) => ({
  city: "Medellin",
  updateCity: (city) => set(() => ({ city: city })),
  response: undefined,
  updateResponse: (response) => set(() => ({ response: response })),
}));
