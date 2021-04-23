import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '~/components/Header'

export default function SearchPage () {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header />
    </>
  )
}