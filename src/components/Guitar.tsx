import { Attributes } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/guitars.module.css'

interface Props {
  guitar: Attributes
}

const Guitar: React.FC<Props> = ({ guitar }) => {
  const { description, image, name, price, url } = guitar
  return (
    <div className={styles.guitarra}>
      <Image src={image.data.attributes.formats.medium.url} width={100} height={50} alt={`Image guitar ${name}`}/>
      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
        <Link 
          href={`/guitars/${url}`}
          className={styles.enlace}
        >Ver producto</Link>
      </div>      
    </div>
  )
}

export default Guitar