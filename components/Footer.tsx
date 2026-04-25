export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-8">
      <div className="mx-auto max-w-4xl px-4 text-center text-sm text-[hsl(var(--muted-foreground))]">
        <p>&copy; {new Date().getFullYear()} Infinity Gravity. Todos os direitos reservados.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="/feed.xml"
            className="transition-colors hover:text-[hsl(var(--foreground))]"
          >
            RSS
          </a>
          <a
            href="https://infinitygravity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[hsl(var(--foreground))]"
          >
            Site Principal
          </a>
        </div>
      </div>
    </footer>
  );
}
