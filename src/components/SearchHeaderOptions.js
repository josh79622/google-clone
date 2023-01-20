import React from 'react'
import SearchHeaderOption from './SearchHeaderOption'
import { MagnifyingGlassIcon, PhotoIcon  } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export default function SearchHeaderOptions() {
  const router = useRouter()
  return (
    <div className="flex space-x-8 select-none w-full justify-center lg:pl-52 lg:justify-start text-gray-700 border-b">
      <SearchHeaderOption type="" title="All" Icon={MagnifyingGlassIcon} selected={!router?.query?.searchType}/>
      <SearchHeaderOption type="image" title="Image" Icon={PhotoIcon} selected={router?.query?.searchType === 'image'}/>
    </div>
  )
}
