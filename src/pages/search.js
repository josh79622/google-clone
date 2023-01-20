import SearchHeader from '@/components/SearchHeader'
import SearchResults from '@/components/SearchResults'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Response from 'Response'

export default function Search({results}) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.q} - Search page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader/>


      {/* Search Result */}
      <SearchResults results={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const mockData = true
  if (!context.query.q) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const data = mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.q}${context.query.searchType && `&searchType=${context.query.searchType}`}`
  ).then((response) => response.json())
  return {
    props: { results: data } 
  }
}