import SearchBar from "../SearchBar"

export default function NavBar() {
    return (
      <div className="py-1 pr-3 mb-0 Barset align-middle grid grid-cols-3 grid-rows-1 grid-flow-col">
        <div className="text-Left">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <div className="text-right"><SearchBar /></div>
        <div className="p-2 text-right"><a href="/login">SIGN UP</a>/LOG IN</div>
      </div>
    )
}