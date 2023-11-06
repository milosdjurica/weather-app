import { Home, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
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
