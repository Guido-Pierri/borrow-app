import { GoSearch } from "react-icons/go"

export default function SearchBar({ setQuery, query }: any) {
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // handle form submission
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label className="relative">
        <input
          className="bg-[#E6E6E6] font-sans placeholder-black outline-[#9EBB9D] px-6 py-2 rounded-sm w-80"
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
