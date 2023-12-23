
const SearchBox = () => {
  return (
    <div className="w-[400px] bg-green-200 p-3 mx-auto mt-2 rounded-xl">
        <input type="text" placeholder="Enter City" className="p-1 px-2 bg-green-100 rounded-lg w-[295px] outline-none" />
        <button className="bg-green-400 p-1 px-2 rounded-lg ml-2">Search</button>
    </div>
  )
}

export default SearchBox