import SearchHeader from '@/components/SearchHeader'
import Head from 'next/head'
import React from 'react'
import Response from 'Response'

export default function search({result}) {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader/>


      {/* Search Result */}
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
    props: { result: data } 
  }
}