import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dayjs from "dayjs";

export default function NewPostsPage() {
  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");
    const title = formData.get("title");
    const content = formData.get("content");
    const now = dayjs();

    await sql`INSERT INTO timedPosts (title, content, time) VALUES (${title}, ${content}, ${now.format(
      "DD/MM/YYYY"
    )})`;
    console.log("Post saved!");
    revalidatePath("/app");
    console.log("Post saved!");
    redirect("/");
  }
  return (
    <form action={handleSavePost}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" />
      <button type="submit">Save</button>
    </form>
  );
}
