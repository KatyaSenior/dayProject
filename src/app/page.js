import Image from "next/image";
import styles from "./page.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Home() {
  const now = dayjs();

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>The current date and time are: {now.format("DD/MM/YYYY HH:mm:ss")}</p>
      <p>The current time in a 12 hour format is: {now.format("hh:mma")}</p>
      <p>This p tag was totally made {dayjs().to(dayjs("1990-01-01"))}.</p>
      <p>Hello</p>
    </div>
  );
}
