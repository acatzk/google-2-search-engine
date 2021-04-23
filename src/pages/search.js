import Head from 'next/head'
import Response from '~/utils/Response'
import { useRouter } from 'next/router'
import Header from '~/components/Header'
import SearchResults from '~/components/SearchResults'

export default function SearchPage ({ results }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header />
      <SearchResults results={results} />
    </>
  )
}

export async function getServerSideProps (context) {
  const useDummyData = false
  const startIndex = context.query.start || '0'

  const data = useDummyData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then(response => response.json())

  return {
    props: {
      results: data
    }
  }
}