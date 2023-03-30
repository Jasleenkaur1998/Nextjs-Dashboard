import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Hero from './components/HeroCard'
import HeroCard from './components/HeroCard'
import getHeros from '@/lib/hero'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const response = await getHeros();

  return (
    <main>
      <div className={styles.heroContainer}>
        {
          response.data.map((user, index) => {
            return (
              <HeroCard key={index} user={user} />
            )
          })
        }
      </div>
    </main>
  )
}
