import {useState, useEffect} from 'react'
const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api";
const API_COHORT = "/2304-FTB-ET-WEB-FT";


const NewPlayer = () => {
    const [playerRoster, setPlayerRoster] = useState([])
    const [newPlayerName, setNewPlayerName] = useState([])
    const [newImageUrl, setNewImageUrl] = useState([])
    const [newBreed, setNewBreed] = useState([])
    const [newStatus, setNewStatus] = useState([])

    useEffect ( () => {
        const fetchPlayerRoster = async () => {
            try {
                const response = await fetch (`${API_URL}${API_COHORT}/players`)
                const data = response.json()
                console.log(data.data.player)
                // setPlayerRoster(data.data.player)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchPlayerRoster()
    }, [])

    const postFormResponse = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}${API_COHORT}/players`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({
                    name: newPlayerName,
                    imageUrl: newImageUrl,
                    breed: newBreed,
                    status: newStatus
                })
            })
            
            const data = await response.json()
            console.log(data)

            setPlayerRoster(...playerRoster, data)

        } catch (error) {
            console.log(error);
            }
    };

    return (
    
    <div>
        
        <form 
          onSubmit={postFormResponse}
          >
        <label htmlFor="name">New Player Name:</label>
          <input 
            name="title" 
            type="text" 
            value={newPlayerName}  
            onChange={(event) => {
              setNewPlayerName(event.target.value)
            }}
            >
            </input>
        <label htmlFor="image">Player Image:</label>
            <input 
              name="image" 
              type="url" 
              value={newImageUrl}  
              onChange={(event) => {
                setNewImageUrl(event.target.value)
              }}
                >
                </input>
        <label htmlFor="name">Player Breed:</label>
            <input 
                name="breed" 
                type="text" 
                value={newBreed}  
                onChange={(event) => {
                setNewBreed(event.target.value)
                }}
                >
            </input>
        <label htmlFor="name">Player Status:</label>
          <input 
            name="status" 
            type="text" 
            value={newStatus}  
            onChange={(event) => {
              setNewStatus(event.target.value)
            }}
            >
          </input>
          <button type="submit">Submit</button>
        </form>

    </div>
    
    )

}
export default NewPlayer;