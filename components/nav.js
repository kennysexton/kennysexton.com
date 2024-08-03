import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/Nav.module.css'
import { useRouter } from 'next/router';

const defaultName = 'Photography'

const navDirectory = [
  { href: '/', name: defaultName },
  { href: '/coding', name: 'Coding' },
  { href: '/books', name: 'Books' },
]

export default function Nav() {
  const router = useRouter();
  const { pathname } = router;
  const [activeNavItem, setActiveNavItem] = useState(() => getCurrentSelectedRoute(pathname));

  // Track if user has started scrolling. 
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    console.log(`use effect!`)
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // When scrolling starts, add a dropshadow to the navbar
    <nav className={`sticky backdrop-blur-md bg-white/80 top-0 h-12 sm:h-16 z-50 ${scrollY < 5 ? "drop-shadow-none" : "drop-shadow-sm"}`}>
      <div className="container h-full flex justify-between items-center">
        <div>
          <Link
            onClick={() => setActiveNavItem(defaultName)}
            className="text-lg text-neutral-800"
            href="/"
          >
            Kenny Sexton
          </Link>
          <div>{activeNavItem}</div>
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

// Handling when a route is manually set by typing in a url
function getCurrentSelectedRoute(pathname) {
 for (const navOption of navDirectory) {
    console.log(`Test   ${pathname} | ${navOption.href}`)
    if (navOption.href.includes(pathname)) {
      console.log(`hit! on ${navOption.name}`)
      return navOption.name
    }
  }

  console.warn(`Current pathname does not match any of the existing routes! `)
  // No match, use default
  return defaultName;
}