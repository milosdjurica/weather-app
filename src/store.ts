import { create } from "zustand";
import { ResponseData } from "./types";

type State = {
  response: ResponseData | undefined;
};

type Action = {
  updateResponse: (response: State["response"]) => void;
};

export const useMyStore = create<State & Action>((set) => ({
  response: undefined,
  updateResponse: (response) => set(() => ({ response: response })),
}));
