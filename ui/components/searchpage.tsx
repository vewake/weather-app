"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
export default function SearchPage() {
  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions]: any = useState()
  const router = useRouter();
  useEffect(() => {
    // TODO: add debouncing
    async function getSuggestions() {
      if (!search) {
        setSuggestions([])
        return
      }
      const response = await axios.post('/api/suggestions',
        {
          search: search
        }
      )
      setSuggestions(response.data)
    }
    getSuggestions()
  }, [search])
  //TODO: typewriter effect in placeholder🙂🙂 
  return (

    <div>
      <div className="w-full flex flex-row justify-between items-center ">
        <div>
          <input onChange={(e) => {
            setSearch(e.target.value)
          }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (!suggestions[0]) {
                  router.push(`/search/${search}`)
                }
                else {
                  router.push(`/search/${suggestions[0].city}`)
                }
              }
            }}
            type="text" placeholder="Search..." className="lg:w-96 w-60 rounded-lg bg-sky-200 p-1 m-1 lg:p-2 lg:m-2 text-xl lg:text-2xl text-black" />
        </div>
        <Link href={`/search/${search}`}>
          <div className="cursor-pointer">
            <Image src="/search.svg" alt="search" width={50} height={50} className="" />
          </div>
        </Link>
      </div >
      <div >
        {suggestions && suggestions.map((item: any) =>
          <div style={{ margin: '0.5rem' }}>
            <Link href={`/search/${item.city}`}>
              <Suggestion suggestion={
                {
                  name: item.city, state: item.state
                }
              }
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
function Suggestion({ suggestion }: { suggestion: any }) {
  return (
    <div>
      <div className="border-2 border-black rounded-lg p-2 m-2">
        <div className="text-2xl font-bold">{suggestion.name}</div>
        <div className="text-base">{suggestion.state}</div>
      </div>
    </div>
  )
}
