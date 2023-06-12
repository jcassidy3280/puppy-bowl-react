import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


// import RemoveFromTeam from "./RemoveFromTeam";
const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api";
const API_COHORT = "/2304-FTB-ET-WEB-FT";

const SinglePlayerCard = () => {
    const [playerById, setPlayerById] = useState(null)
    // const [team, setTeam] = useState([]);
    const { id } = useParams();
    

    const getPlayerById = async () => {
        try {
            const response = await fetch(`${API_URL}${API_COHORT}/players/${id}`);
            const data = await response.json()
                setPlayerById(data.data.player)
        } catch (error) {
            console.log(error)
        }
        
    }
    
    useEffect ( ()=>{getPlayerById()}, [])
    
    // const playerNav = useNavigate();

  return (
    <div className="single-player-card">
      {playerById && playerById.name ? (
        <>
          <h4>{playerById.name}</h4>
          <p>
            <img className="puppy-image" src={playerById.imageUrl} alt={`${playerById.name} is a very cute ${playerById.breed} puppy.`} />
            <br />
            Breed: {playerById.breed}
            <br />
            Player Status: {playerById.status}
          </p>
             {/* <button onClick={()=>{
              const myTeam = team.push(playerById)
              setTeam([...team, myTeam])
              console.log(`${playerById.name} added to team. `, team)
              playerNav(`../myTeam`);
              }
            }> Add to My Team</button> */}
        </>
      ) : (
        <h3>Loading</h3>
      )}
    </div>  );
};

export default SinglePlayerCard;
