import {fetchAllPlayers} from './fetchAPI.js' 
import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
// import PlayerRoster from './components/PlayerRoster.jsx'
import SinglePlayerCard from './components/SinglePlayerCard.jsx'
import SearchBar from './components/SearchBar.jsx'
// import YourPuppyBowlTeam from './components/MyTeam.jsx'
import './App.css'


function App() {
    // const [eligiblePlayers, setEligiblePlayers] = useState([]);
    // const [team, setTeam] = useState([]);

  const [allPlayers, setAllPlayers] = useState([])

  const getAllPlayers = async () => {
    try {
      const playerArr = await fetchAllPlayers()
      setAllPlayers(playerArr)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect ( () => {{getAllPlayers()}
  }, [])

  // useEffect ( ()=> {
  //   //filter for bench
  //   //set new array to state
  //   setEligiblePlayers(allPlayers)
  //   //pass

  // }, [allPlayers])
  // console.log(eligiblePlayers)

  return (
    <>
      <nav>
        <NavBar />
      </nav>
   
      <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<SearchBar />} />
            <Route path="/selectedPlayer/:id" element={<SinglePlayerCard />} />
            {/* <Route path="/myTeam" element={<YourPuppyBowlTeam />} /> */}

          </Routes>
          </div>
     
    </>
  )
}

export default App;
