import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { mdxComponents } from "@/components/MDXComponents";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: post.image ? [{ url: post.image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
          {post.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
          <span>{post.author}</span>
          <span>·</span>
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-brand-400 prose-a:no-underline hover:prose-a:underline max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: post.image
              ? `https://blog.infinitygravity.com${post.image}`
              : undefined,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Infinity Gravity",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://blog.infinitygravity.com/blog/${slug}`,
            },
          }),
        }}
      />
    </article>
  );
}
