import ListGuitar from '@/components/Guitar'
import Layout from '@/components/Layout'
import { Guitar } from '@/types'
import { GetServerSideProps } from 'next'
import styles from '../styles/grid.module.css'

interface Props { data: Guitar[] }

// Si llegase a marcar error cambiar "localhost" por 127.0.0.1
const URL_API_GUITARS = `${process.env.API_URL_GUITARS}/guitars?populate=image`

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(URL_API_GUITARS)
  const { data }: { data: Guitar[] } = await response.json()
  return {
    props: { data }
  }
}

const Store: React.FC<Props> = ({ data }) => {
  return (
    <Layout
      title={'Store'}
      description="Guitar store, instruments GuitarLA"
    >
      <main className='contenedor'>
        <h2 className="heading">Our Collection</h2>
        <div className={styles.grid}>
          {
            data?.map(({id, attributes}) => (
              <ListGuitar
                key={id}
                guitar={attributes}
              />
            ))
          }
        </div>
      </main>
    </Layout>
  )
}

export default Store