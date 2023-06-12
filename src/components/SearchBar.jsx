import React from "react";
import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../fetchAPI";
import SelectSinglePlayer from "../components/SinglePlayer"

const SearchBar = () => {
    const [allPlayers, setAllPlayers] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

  const getAllPlayers = async () => {
    try {
      const playerArr = await fetchAllPlayers()
      setAllPlayers(playerArr)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect ( () => {getAllPlayers()
  }, [])

  let searchResults = allPlayers.filter( (element) => {
    let lowercaseName = element.name.toLowerCase()
    let lowercaseQuery = searchQuery.toLowerCase()
    
    if(lowercaseName.includes(lowercaseQuery)) {
       return element
    }
    else {
        getAllPlayers()
    }
  })

    return (
        <div>
            <form id="search-bar">
            <label htmlFor="search-query">Search by Name: </label>
            <input 
                name="search-query"
                type="text"
                placeholder="type here"
                value={searchQuery}
                onChange={(event) => {
                    setSearchQuery(event.target.value)
                }}
                ></input>
            </form>
            <div>
              <h2>Click on a Player Name for More Details</h2> 
              </div>
            {
                searchResults.length ? 
                searchResults.map( (element, index) => {
                    return(
                        <div id="roster" key={index}>
                            <SelectSinglePlayer element={element}/>
                        </div>
                    )
                }) : console.log("Loading") 
            }
        </div>
    )
}

export default SearchBar