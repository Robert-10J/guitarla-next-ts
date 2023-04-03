import Layout from '@/components/Layout'
import Link from 'next/link'

const Page404 = () => {
  return (
    <Layout
      title='Page not found 404'
    >
      <p className='error'>Page Not Found</p>
      <Link href='/' className='error-enlace'>Home</Link>
    </Layout>
  )
}

export default Page404