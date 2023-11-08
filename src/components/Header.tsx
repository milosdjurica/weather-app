"use client";

import React, { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useMyStore } from "@/store";
import getForecast from "@/utils/getForecast";

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState("Novi Sad");

  const [response, updateResponse] = useMyStore((state) => [
    state.response,
    state.updateResponse,
  ]);

  useEffect(() => {
    makeRequest();
  }, []);

  function makeRequest() {
    setIsLoading(true);
    getForecast(currentCity).then((data) => {
      updateResponse(data);
      setIsLoading(false);
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // TODO Add location search from same api. When user types the name of the city
  // TODO Then after 1 sec show results that he can pick from
  return (
    <div className="flex items-center justify-between px-6 py-3 shadow-sm shadow-primary">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          makeRequest();
        }}
      >
        <input
          type="text"
          placeholder={currentCity}
          className="w-[150px] rounded-xl border border-primary 
      bg-muted px-3 py-1
      text-center sm:w-[200px]"
          onChange={(e) => setCurrentCity(e.target.value)}
        />
      </form>
      <ThemeSwitcher />
    </div>
  );
}
