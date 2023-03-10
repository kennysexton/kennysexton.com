import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Nav.module.css'

const defaultName = 'Home'

const navDirectory = [
  { href: '/', name: defaultName },
  { href: '/projects', name: 'Projects' },
  { href: '/books', name: 'Books' },
]

export default function Nav() {
  const [activeNavItem, setActiveNavItem] = useState(defaultName)

  return (
    <nav className="sticky backdrop-blur-md bg-white/90 drop-shadow-sm top-0 h-12 sm:h-16">
      <div className="container h-full flex justify-between items-center">
        <div>
          <Link
            onClick={() => setActiveNavItem(defaultName)}
            className="text-lg text-neutral-800"
            href="/"
          >
            Kenny Sexton
          </Link>
        </div>
        <div className="flex lg:gap-8 gap-2 text-sm text-neutral-500">
          {navDirectory.map((item) => (
            <div key={item.name} className="hover:underline hover:underline-offset-8 hover:text-neutral-800">
              <Link
                onClick={() => setActiveNavItem(item.name)}
                href={item.href}
                className={(activeNavItem === item.name) && 'underline underline-offset-8 text-neutral-800'}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
