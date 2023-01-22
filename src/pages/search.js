import ImageResults from '@/components/ImageResults'
import SearchHeader from '@/components/SearchHeader'
import SearchResults from '@/components/SearchResults'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Response from 'Response'

export default function Search({results}) {
  const router = useRouter()
  console.log('RESULT', results)
  return (
    <div>
      <Head>
        <title>{router.query.q} - Search page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader/>


      {/* Search Results and Image Results*/}
      {
        router?.query?.searchType === 'image' ?
          <ImageResults results={results}/> :
          <SearchResults results={results}/>
      }
      

      
    </div>
  )
}

export async function getServerSideProps(context) {
  const page = Number(context.query.page) || 1
  const start = (page - 1) * 10 + 1
  const mockData = false
  if (!context.query.q) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const data = mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.q}${context.query.searchType ? `&searchType=${context.query.searchType}` : ''}&start=${start}`
  ).then((response) => response.json())
  return {
    props: { results: data } 
  }
}