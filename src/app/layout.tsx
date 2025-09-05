import type { Metadata } from 'next'
import { Crimson_Text } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'RUZIVO Research Lab | Localizing AI Research for Africa',
  description: 'RUZIVO Research Lab is a collective of researchers from African Leadership University focused on localizing AI and research for Africa across NLP, Computer Vision, and related fields.',
  keywords: ['AI research', 'Africa', 'NLP', 'Computer Vision', 'African Leadership University', 'Machine Learning', 'Artificial Intelligence'],
  authors: [{ name: 'RUZIVO Research Lab' }],
  openGraph: {
    title: 'RUZIVO Research Lab',
    description: 'Localizing AI Research for Africa',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUZIVO Research Lab',
    description: 'Localizing AI Research for Africa',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={crimsonText.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

