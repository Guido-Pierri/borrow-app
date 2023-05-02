import type { AppProps } from 'next/app'
import { Props } from 'react-burger-menu'
import { GoSearch } from 'react-icons/go'

export default function SearchBar({ Component, setQuery, query }: any) {
  return (
    <form>
      <label className="relative">
        <input
          className="bg-gray-300 font-sans placeholder-black px-6 py-2 rounded-sm w-80"
          type="text"
          placeholder="Sök..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-black">
          <GoSearch />
        </div>
      </label>
    </form>
  )
}
