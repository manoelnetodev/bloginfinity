import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Infinity Gravity
          <span className="ml-2 text-sm font-normal text-[hsl(var(--muted-foreground))]">
            Blog
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
          >
            Posts
          </Link>
          <Link
            href="https://infinitygravity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
          >
            Infinity Gravity
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
