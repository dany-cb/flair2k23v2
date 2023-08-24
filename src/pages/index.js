import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "../components/header"
import Hero from "../components/hero"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      hello world
    </main>
  )
}
