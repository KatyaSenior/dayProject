import { sql } from "@vercel/postgres";

export default async function Home() {
  const timedPosts = await sql`SELECT*FROM timedPosts`;
  console.log({ timedPosts });
  return (
    <div>
      <h1>timedPosts</h1>
      {timedPosts.rows.map((timedPost) => {
        const formattedTime = new Date(timedPost.time).toLocaleString("en-GB", {
          timeZone: "Europe/London",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        return (
          <div key={timedPost.id}>
            <h3>{timedPost.title}</h3>
            <p>{timedPost.content}</p>
            <p>Posted on {formattedTime}</p>
          </div>
        );
      })}
    </div>
  );
}
