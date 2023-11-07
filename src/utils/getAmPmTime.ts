export default function getAmPmTime(time: string): string {
  return Number(time.split(" ")[1].split(":")[0]) >= 12 ? "" : "AM";
}
