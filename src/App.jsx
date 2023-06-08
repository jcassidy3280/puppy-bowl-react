import {fetchAllPlayers} from './fetchAPI.js' 
import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'
import './App.css'


function App() {

  const [ allPlayers, setAllPlayers] = useState([])
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
    console.log(allPlayers)
  return (
    <>
      <div className="title">
        <h1>Puppy Bowl</h1>
      </div>
      <div id="nav-bar">
        <NavBar />
      </div>
      <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blue" element={<AllPlayers />} />
            <Route path="/blue" element={<SinglePlayer />} /> */}
          </Routes>
          </div>
      <div id="single-player">
        < SinglePlayer />
      </div>
    </>
  )
}

export default App;
