import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import { MicrophoneIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import User from './User'
import classNames from 'classnames'
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const [q, setQ] = useState('')

  useEffect(() => {
    setQ(router.query.q)
  }, [router.query])

  function clear () {
    setQ('')
  }

  function search (e) {
    e.preventDefault()
    const Q = q.trim()
    if (Q) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          q: Q,
          page: 1,
        }
      })
    }
    return;
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push('/')}
          src="https://www.google.com.tw/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          className="object-contain cursor-pointer"
          width="120"
          height="40"
          alt="google"
        />
        <form className="flex border border-gray-200 rounded-full hover:shadow-lg focus-within:shadow-lg px-6 py-3 ml-10 mr-5 flex-grow  max-w-3xl items-center">
          <input ref={searchInputRef} onChange={(e) => setQ(e.target.value)} value={q} className="w-full focus:outline-none" type="text"/>
          <XMarkIcon onClick={clear} className={classNames("h-7 text-gray-500 cursor-pointer sm:mr-3", { hidden: !q })}/>
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3"/>
          <button onClick={search}><MagnifyingGlassIcon className="h-6 hidden sm:inline-flex text-blue-500"/></button>
        </form>
        <User className='ml-auto'/>
      </div>
      <SearchHeaderOptions/>
    </header>
  )
}
