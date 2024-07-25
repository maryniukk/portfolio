'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavLink {
  href: string
  label: string
}

export interface Props {
  navLinks: NavLink[]
}

export default function Menu({ navLinks }: Props) {
  const pathname = usePathname()

  return (
    <motion.div 
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
    >
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`text-[22px] font-light hover:text-underline text-whit ${pathname === link.href ? 'text-white font-bold hover:text-[#ff00aa] transition-all'  : ''}`} 
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
}
