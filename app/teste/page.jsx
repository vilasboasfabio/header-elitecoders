import Header from "../components/header/Header";
import styles from './teste.module.css'
import Footer from "../components/footer/Footer";


function Teste(){
    return(
        <div className={styles.some}>
            <Header />
            <main className={styles.content}>
            <h2>Teste</h2>
            </main>
     

        <Footer />
       
        </div>
    )
}

export default Teste;