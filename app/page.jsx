import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import styles from './page.module.css'

export default function Home() {
  return (

  <>
  <main className={styles.content}>
  <Header />
  <h2>Home Page</h2>
  
    <div>
      <h2>Dados Pessoais</h2>
      <p>Nome: <span>Felipe</span> </p>
      <p>Idade: <span>16</span> </p>
      <p>CPF: <span>098.897.567-10</span> </p>
    </div>
    </main>
    <Footer />

  </>
  )
}
