import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import getForecast from "@/utils";

export default function Home() {
  const res = getForecast("Medellin");

  return (
    <div>
      <h1 className="text-6xl">Weather app with ShadCN</h1>
      <ThemeSwitcher />
      <p></p>
    </div>
  );
}
