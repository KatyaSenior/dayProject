import { sql } from "@vercel/postgres";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Button from "../components/Button";
import { revalidatePath } from "next/cache";
dayjs.extend(relativeTime);

export default async function Posts() {
  revalidatePath("/posts");
  const timedPosts = await sql`SELECT*FROM timedPosts`;

  return (
    <div>
      <h1>timedPosts</h1>
      {timedPosts.rows.map((timedPost) => {
        const formattedDate = dayjs(timedPost.time).format("DD/MM/YYYY");
        const formattedTime = dayjs(timedPost.time).format("HH:mm");
        const relativeTime = dayjs(timedPost.time).fromNow();

        return (
          <div key={timedPost.id}>
            <h3>{timedPost.title}</h3>
            <p>{timedPost.content}</p>
            <p>Posted {relativeTime} </p>
            <div>
              <Button
                formattedDate={formattedDate}
                formattedTime={formattedTime}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
