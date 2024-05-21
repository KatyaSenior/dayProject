import Image from "next/image";
import styles from "./page.module.css";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import relativeTime from "dayjs/plugin/relativeTime";
import objectSupport from "dayjs/plugin/objectSupport";
dayjs.extend(relativeTime);
dayjs.extend(objectSupport);

export default function Home() {
  const now = dayjs();
  const staticTime = dayjs().format("DD / MM / YYYY");

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>The current date and time are: {now.format("DD/MM/YYYY HH:mm:ss")}</p>
      <p>The current time in a 12 hour format is: {now.format("hh:mma")}</p>
      <p>This p tag was totally made {dayjs().to(dayjs("1990-01-01"))}.</p>
      {/* <p>
        This p tag was made on:{" "}
        {staticTime({ years: 1990, months: 0, date: 1 })}
      </p> */}
    </div>
  );
}
