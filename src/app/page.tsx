"use client"

import { useState, useEffect } from "react"


export default function Home() {
  const [searchBarValue, setSearchBarValue] = useState<string>('')


  // DATA ARRAY
  const data: string[] = [
    "delhi", "goa", "kolkata", "mumbai", "bombay", "shanghai", "new york", "varanasi", "raipur", "bilaspur", "london", "birmingham", "san fransisco", "bhopal", "lucknow", "cooch behar", "sealdah", "farakka", "pune", "thane", "gurugram", "new delhi", "sao paulo", "Lahore", "rawalpindi", "islamabad", "lebanon", "turkey", "ankara", "argentina", "brazil", "buenos aires", "rio de janerio", "seoul", "beijing", "jakarta", "singapore", "paris", "manchester", "dhaka", "los angeles", "shimla", "rishikesh", "haridwar", "srinagar", "jaipur", "kota", "udaipur", "nagpur", "tokyo", "dubai", "bangalore", "moscow", "chennai", "tehran", "chengdu", "lima", "hong kong", "riyadh", "surat", "baghdad", "dallas", "houston", "toronto", "barcelona", "khartoum", "johannesburg", "atlanta", "washington", "saint petersburg", "jinan", "madrid", "dar es salaam", "belo horizonte", "miami", "panaji", "telangana", "shillong", "guwahati", "silchar", "allahbad", "hyderabad", "guangdong", "berlin", "athens", "kyiv", "vatican city", "san marino", "slovenia", "rome", "zurich", "vienna", ""
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
        .map((item: string, index: number) => (
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
