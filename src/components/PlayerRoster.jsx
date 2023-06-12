// import { fetchAllPlayers } from "../fetchAPI";
// import SelectSinglePlayer from "./SinglePlayer";
// import NewPlayer from "./NewPlayerForm";
// import { useState, useEffect } from "react";
// import SearchBar from "./SearchBar";

// const PlayerRoster = () => {

 
//   const [allPlayers, setAllPlayers] = useState([])
  
  
//   const getAllPlayers = async () => {
//     try {
//       const playerArr = await fetchAllPlayers()
//       setAllPlayers(playerArr)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect ( () => {getAllPlayers()
//   }, [])
  
//   return (
//         <div id="all-players-container">
//             <h2>Meet the Players! </h2>
//             <p>Click of the Player Name for more details.</p>
//             <div>
//                 {
//                   <SearchBar 
//                 allPlayers.length ? allPlayers.map ( (element) => {
//                 console.log ( 
//                   < SelectSinglePlayer key={element.id} element={element}/>
//                 )
//                 }) : <p>Loading ...</p>
//                   />}
//                 </div>
//             <div>
//               <NewPlayer />
//             </div>
//         </div>



// )        
// }

// export default PlayerRoster;