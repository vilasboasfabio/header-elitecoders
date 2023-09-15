
import styles from './header.module.css';
import NavLink from '../navlink/NavLink';
import {AiFillGithub} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs'
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.div_icons}>
              <Link href="https://linktr.ee/samue.pinheiro.senai564" className={styles.link}><AiFillGithub size={30}className={styles.icons}/></Link>
               <Link href="https://linktr.ee/samuel.pinheiro24;" className={styles.link}><BsInstagram size={25} className={styles.iconInsta}/></Link>
            </div>
             <div className={styles.links}>
            <NavLink rota={'/'} texto={'Exemplo'} />
            <NavLink rota={'/teste'} texto={'Exemplo'} />
          
        </div>
        <div className={styles.div_img}>
        <Image src="/aaaa.jpeg" alt="Logo" width={100} height={50} className={styles.logo} />
        </div>
        <div className={styles.links1}>
            <NavLink rota={'/'} texto={'Exemplo'} />
            <NavLink rota={'/teste'} texto={'Exemplo'} />

        </div>
        
        </div>
      
    )
}

export default Header