import React from 'react'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Pagination() {
  const router = useRouter()
  const page = Number(router.query.page) || 1
  return (
    <div className=" text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44">
      {
        page > 1 &&
        <Link
          href={{
            pathname: '/search',
            query: { ...router.query, page: page - 1}
          }}
          className="hover:underline"
        >
          <div className="flex flex-col items-center">
            <ChevronLeftIcon className="h-5"/>
            <p>Previous</p>
          </div>
        </Link>
      }
      {
        page < 10 &&
        <Link
          href={{
            pathname: '/search',
            query: { ...router.query, page: page + 1}
          }}
          className="hover:underline"
        >
          <div className="flex flex-col items-center">
            <ChevronRightIcon className="h-5"/>
            <p>Next</p>
          </div>
        </Link> 
      }
    </div>
  )
}
