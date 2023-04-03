import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import Layout from '@/components/Layout'
import styles from '../../styles/guitars.module.css'
import { Guitar } from '@/types'

interface Props { data: Guitar[] }
interface Params extends ParsedUrlQuery { url: string }

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const URL_GUITARS_PATHS = `${process.env.API_URL_GUITARS}/guitars`
  const reponse = await fetch(URL_GUITARS_PATHS)
  const { data }: { data: Guitar[] } = await reponse.json()

  const paths = data.map(({ attributes }) => ({
    params: {
      url: attributes.url
    }
  }))

  return {
    paths,
    fallback: false // En caso de que no exista una guitarra con esa url mostrará page not foun(404)
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const url = params?.url
  const URL_GUITAR = `${process.env.API_URL_GUITARS}/guitars?filters[url]=${url}&populate=image`
  const response = await fetch(URL_GUITAR)
  const { data }: { data: Guitar[] } = await response.json()
  return {
    props: { data }
  }
}

const Product: React.FC<Props> = ({ data }) => {
  const { name, description, price, image } = data[0].attributes
  return (
    <Layout
      title={`Guitar ${name}`}
      description={description}
    >
      <div className={styles.guitarra}>
        <Image src={image.data.attributes.url} width={100} height={50} alt={`Image guitar ${name}`} />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${price}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Product

/* export const getServerSideProps: GetServerSideProps = async ({ query: { url } }) => {  
  const URL_GUITAR = `${process.env.API_URL_GUITARS}/guitars?filters[url]=${url}&populate=image`
  const response = await fetch(URL_GUITAR)
  const { data }: { data: SingleGuitar[] } = await response.json()
  return {
    props: { data }
  }
} */

