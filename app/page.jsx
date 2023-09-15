import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import styles from './page.module.css'

export default function Home() {
  return (

  <>
  <main className={styles.content}>
  <Header />
  <h2>Home Page</h2>
  
  <p>Aqui é a página 1</p>
    </main>
    <Footer />

  </>
  )
}
