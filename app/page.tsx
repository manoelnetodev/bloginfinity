import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-lg text-[hsl(var(--muted-foreground))]">
          Tutoriais, dicas e guias sobre tecnologia e produtividade Google.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-[hsl(var(--muted-foreground))]">
          Nenhum post publicado ainda.
        </p>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Infinity Gravity Blog",
            description:
              "Tutoriais, dicas e guias sobre tecnologia Google, produtividade e planos familiares.",
            url: "https://infinitygravity.com/blog",
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `https://infinitygravity.com/blog/${post.slug}`,
              datePublished: post.date,
            })),
          }),
        }}
      />
    </div>
  );
}
