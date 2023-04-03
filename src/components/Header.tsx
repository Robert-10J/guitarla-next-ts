import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'
import { NAV_LINKS } from '@/consts'

const Header = () => {
  const router = useRouter()
  
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image src="/img/logo.svg" width={400} height={50} alt='image logo'/>
        <nav className={styles.navigation}>
          {
            NAV_LINKS.map(({ href, page }) => {
              const className = router.pathname === href ? styles.active : ''
              return (
                <Link key={href} href={href} className={className}>
                  {page}
                </Link>
              )
            })
          }
        </nav>
      </div>
    </header>
  )
}

export default Header