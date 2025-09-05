'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/people', label: 'People' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-border/40 bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-foreground flex items-center justify-center">
            <span className="text-sm font-bold text-background">R</span>
          </div>
          <span className="text-xl font-semibold">Ruzivo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors relative',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navbar-underline"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 40,
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="border-t bg-background md:hidden"
        >
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block py-2 text-sm font-medium transition-colors hover:text-foreground/80',
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}

