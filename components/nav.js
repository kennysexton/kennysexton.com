import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Nav.module.css'

const defaultName = 'Home'

const navDirectory = [
  { href: '/', name: defaultName },
  { href: '/aerial', name: 'Aerial' },
  { href: '/projects', name: 'Projects' },
  { href: '/books', name: 'Books' },
]

export default function Nav() {
  const [activeNavItem, setActiveNavItem] = useState(defaultName)

  return (
    <nav className="sticky top-0 h-24">
      <div className="container h-full flex justify-between items-center">
        <div>
          <Link
            onClick={() => setActiveNavItem(defaultName)}
            className="text-lg"
            href="/"
          >
            Kenny Sexton
          </Link>
        </div>
        <div className="flex lg:gap-8 sm:gap-2 text-sm text-neutral-500">
          {navDirectory.map((item) => (
            <div key={item.name} className="hover:underline hover:underline-offset-8 hover:text-black">
              <Link
                onClick={() => setActiveNavItem(item.name)}
                href={item.href}
                className={(activeNavItem === item.name) && 'underline underline-offset-8 text-black'}
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
