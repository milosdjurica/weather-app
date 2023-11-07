"use client";

import { Home, Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useMyStore } from "@/store";
import getForecast from "@/utils/getForecast";
import { ResponseData } from "@/types";
import Error from "next/error";

export default function Header({ res }: { res: ResponseData | undefined }) {
  const [updateResponse] = useMyStore((state) => [state.updateResponse]);

  useEffect(() => {
    updateResponse(res);
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
