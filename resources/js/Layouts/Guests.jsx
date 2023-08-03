import { Link } from '@inertiajs/react'
import React from 'react'

export default function Guests({children}) {
  return (
    <main>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts">Posts</Link>
      </header>
      <article>{children}</article>
    </main>
  )
}
