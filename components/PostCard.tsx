import Link from "next/link";
import type { Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/50 p-6 transition-all hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/5">
      <Link href={`/blog/${post.slug}`}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-brand-400">
            {post.title}
          </h2>

          <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
            {post.description}
          </p>

          <time
            dateTime={post.date}
            className="text-xs text-[hsl(var(--muted-foreground))]"
          >
            {formattedDate}
          </time>
        </div>
      </Link>
    </article>
  );
}
