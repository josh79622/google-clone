import User from './User'

export default function Header() {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p class="link">About</p>
        <p class="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p class="link">Gmail</p>
        <p class="link">Images</p>
        <User/>
      </div>
    </header>
  )
}
