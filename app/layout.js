import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import PageWrapper    from '@/components/PageWrapper'

export const metadata = {
  title: 'Maheen Ghouri — Agentic AI Full Stack Developer',
  description: 'Portfolio of Maheen Ghouri — Agentic AI Full Stack Developer specializing in intelligent web apps, AI agents, and custom chatbots.',
  keywords: ['Maheen Ghouri', 'AI Developer', 'Full Stack', 'Next.js', 'Freelance', 'Pakistan'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
