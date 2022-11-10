import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (

    <nav className="sticky top-0 h-24 bg-slate-500">
      <div className="container h-full flex justify-between items-center">
        <div>
          <Link href="/">Kenny Sexton</Link>
        </div>
        <div className="flex">
          <Link href="/">Home</Link>
          <Link href="/aerial">Aerial</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/books">Books</Link>
        </div>
      </div>
    </nav>
  )
}
