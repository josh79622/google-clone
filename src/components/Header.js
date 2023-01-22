import Link from 'next/link'
import User from './User'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href="https://about.google" className="link">About</Link>
        <Link href="https://store.google.com">Store</Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="link">Gmail</Link>
        <Link href="/search?q=google&searchType=image" className="link">Images</Link>
        <User/>
      </div>
    </header>
  )
}
