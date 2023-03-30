import styles from './page.module.css'
import HeroCard from './components/HeroCard'
import { getHeros } from '@/lib/api'


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
