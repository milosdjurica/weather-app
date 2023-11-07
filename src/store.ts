import { create } from "zustand";
import { ResponseData } from "./types";

type State = {
  response: ResponseData | undefined;
  daySelected: number;
  hourSelected: number;
};

type Action = {
  updateResponse: (response: State["response"]) => void;
  updateDaySelected: (daySelected: State["daySelected"]) => void;
  updateHourSelected: (hourSelected: State["hourSelected"]) => void;
};

export const useMyStore = create<State & Action>((set) => ({
  response: undefined,
  updateResponse: (response) => set(() => ({ response: response })),
  daySelected: 0,
  updateDaySelected: (daySelected) => set(() => ({ daySelected: daySelected })),
  hourSelected: 0,
  updateHourSelected: (hourSelected) =>
    set(() => ({ hourSelected: hourSelected })),
}));
