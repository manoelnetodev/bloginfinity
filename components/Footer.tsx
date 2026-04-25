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
        <p className="mt-3 text-xs text-[hsl(var(--muted-foreground))]/60">
          🤖 Construído com ajuda de IA &middot; Orquestrado por{" "}
          <a
            href="https://bmad.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-300 transition-colors"
          >
            BMAD
          </a>
          {" "}&middot; Powered by vibes ⚡
        </p>
      </div>
    </footer>
  );
}
