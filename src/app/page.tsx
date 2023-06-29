"use client"

import { useState, useEffect } from "react"


export default function Home() {
  const [searchBarValue, setSearchBarValue] = useState<string>('')

  // useEffect(() => {

  // }, [searchBarValue])


  // DATA ARRAY
  const data: string[] = [
    "delhi", "goa", "kolkata", "mumbai", "bombay", "shanghai", "new york", "varanasi", "raipur", "bilaspur", "london", "birmingham", "san fransisco", "bhopal", "lucknow", "cooch behar", "sealdah", "farakka", "pune", "thane", "delhi", "gurugram", "new delhi", "sao paulo", "Lahore", "rawalpindi", "islamabad", "lebanon", "turkey", "ankara", "argentina", "brazil", "buenos aires", "rio de janerio",
  ]


  return (
    <div className="main-div">
      <h1>Dynamic search bar</h1>

      <form>
        <input
          type='text'
          className=''
          placeholder="Enter.."
          value={searchBarValue}
          onChange={(e) => {
            setSearchBarValue(e.target.value);
          }}
        />
      </form>

      {data
        .filter(item => {
          const searchTerm = searchBarValue.toLowerCase();
          const city = item.toLowerCase();

          return searchTerm && city.startsWith(searchTerm) && city !== searchTerm
        })
        .map((item:string, index: number) => (
          <div
            key={index}
            onClick={() => {
              setSearchBarValue(item)
            }}
            style={{ cursor: 'pointer' }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1, item.length)}
          </div>
        ))
      }
    </div>
  )
}
