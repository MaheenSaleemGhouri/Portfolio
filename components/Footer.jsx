export default function Footer() {
  return (
    <footer className="bg-bg-footer px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="text-tx-muted text-xs font-body">© 2025 Maheen Ghouri</span>
        <div className="flex gap-5">
          {[
            { label: 'linkedin', href: '#' },
            { label: 'github',   href: '#' },
            { label: 'upwork',   href: '#' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tx-muted hover:text-accent-emerald text-xs font-body transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
