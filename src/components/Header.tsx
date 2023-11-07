"use client";

import { Home, Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useMyStore } from "@/store";
import getForecast from "@/utils/getForecast";

export default function Header() {
  const [updateResponse] = useMyStore((state) => [state.updateResponse]);

  // Fetch the forecast when the component mounts
  useEffect(() => {
    getForecast("Medellin").then((data) => {
      updateResponse(data);
    });
  }, []);

  return (
    <div className="flex px-6 border border-yellow-100 py-3 justify-between items-center">
      <Link href="/">
        <Home />
      </Link>
      <Search />
      <ThemeSwitcher />
    </div>
  );
}
