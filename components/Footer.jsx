export default function Footer() {
  return (
    <footer className="bg-bg-footer px-4 md:px-6 py-4 md:py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="text-tx-muted text-xs font-body">© 2024 Maheen Ghouri</span>
        <div className="flex gap-5">
          {[
            { label: 'linkedin', href: 'https://www.linkedin.com/in/maheen-ghouri-811509308' },
            { label: 'github',   href: 'https://github.com/MaheenSaleemGhouri' },
            { label: 'fiverr',   href: 'https://www.fiverr.com/maheen_ghouri_2/buying?source=avatar_menu_profile' },
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
