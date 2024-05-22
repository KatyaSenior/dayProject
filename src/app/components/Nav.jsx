import headerStyles from "../nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className={headerStyles.nav}>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/posts/new">New Post</Link>
      </nav>
    </header>
  );
}
