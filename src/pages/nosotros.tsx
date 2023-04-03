import Layout from '@/components/Layout'
import Image from 'next/image'
import styles from '../styles/aboutus.module.css'

const nosotros = () => {
  return (
    <Layout
      title={'Nosotros'}
      description={'About us, guitar store'}
    >
      <main className="contenedor">
        <h2 className='heading'>About Us</h2>

        <div className={styles.content}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Image about us'/>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. The point 
              of using Lorem Ipsum is that it has a more-or-less normal distribution 
              of letters, as opposed to using Content here, content here, making it 
              look like readable English. 
            </p>
            <p>
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. The point 
              of using Lorem Ipsum is that it has a more-or-less normal distribution 
              of letters, as opposed to using Content here, content here, making it 
              look like readable English.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default nosotros