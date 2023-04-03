import { NAV_LINKS } from '@/consts'
import Link from 'next/link'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navigation}>
          {
            NAV_LINKS.map(({ href, page }) => {
              return (
                <Link key={href} href={href}>
                  {page}
                </Link>
              )
            })
          }
        </nav>
        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}

export default Footer