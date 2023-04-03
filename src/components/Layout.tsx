import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
  title: string
  description?: string
}

const Layout: React.FC<Props> = ({ children, title = '', description = '' }) => {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name='description' content={description}/>
      </Head>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}

export default Layout