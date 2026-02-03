export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-8 border-t border-border/40 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.02))]" data-testid="footer">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-6 mb-3">
          <a href="https://t.me/TonyDerry" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover-elevate px-3 py-2 rounded-md">
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2l-7 20 4-9 9-9-9 9"></path></svg>
            Telegram
          </a>
          <a href="https://www.linkedin.com/in/ai-gen-td/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover-elevate px-3 py-2 rounded-md">
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><path d="M16 11.37v5.63"></path><path d="M8 11.37v5.63"></path><path d="M6 9.5a2 2 0 1 1 4 0"></path></svg>
            LinkedIn
          </a>
          <a href="https://ko-fi.com/tonyderry" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover-elevate px-3 py-2 rounded-md">
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"></path></svg>
            Ko‑fi
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © Tony Derry {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
