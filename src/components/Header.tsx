"use client";

import { Home, Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useMyStore } from "@/store";
import getForecast from "@/utils/getForecast";

export default function Header() {
  const [city, updateResponse] = useMyStore((state) => [
    state.city,
    state.updateResponse,
  ]);

  // ! check if array should change
  useEffect(() => {
    getForecast(city).then((data) => {
      updateResponse(data);
    });
  }, []);

  return (
    <div className="flex px-6 border border-yellow-100 py-3 justify-between items-center">
      {/* // TODO For search maybe use COMMAND component from ShadCN */}
      {/* // TODO ADD option to change from Celsius to Fs */}
      <Link href="/">
        <Home />
      </Link>
      <Search />
      <ThemeSwitcher />
    </div>
  );
}
