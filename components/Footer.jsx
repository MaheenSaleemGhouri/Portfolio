export default function Footer() {
  return (
    <footer className="bg-black border-t border-border-default px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="text-tx-faint text-xs font-mono">© 2025 Maheen Ghouri</span>
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
              className="text-tx-faint hover:text-accent-purple text-xs font-mono transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
