import { sql } from "@vercel/postgres";

export default async function Home() {
  const blogPosts = await sql`SELECT*FROM blogPosts`;
  console.log({ blogPosts });
  return (
    <div>
      <h1>Blog Posts</h1>
      {blogPosts.rows.map((blogPost) => {
        return (
          <div key={blogPost.id}>
            <h3>{blogPost.title}</h3>
            <p>{blogPost.content}</p>
          </div>
        );
      })}
    </div>
  );
}
