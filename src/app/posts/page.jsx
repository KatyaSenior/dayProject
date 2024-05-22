import { sql } from "@vercel/postgres";
import dayjs from "dayjs";

export default async function Home() {
  const timedPosts = await sql`SELECT*FROM timedPosts`;

  return (
    <div>
      <h1>timedPosts</h1>
      {timedPosts.rows.map((timedPost) => {
        const formattedDate = new Date(timedPost.time).toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });

        const date = new Date(timedPost.time);
        const formattedTime = date.toTimeString();

        return (
          <div key={timedPost.id}>
            <h3>{timedPost.title}</h3>
            <p>{timedPost.content}</p>
            <p>
              Posted on {formattedDate} at {formattedTime}
            </p>
          </div>
        );
      })}
    </div>
  );
}
