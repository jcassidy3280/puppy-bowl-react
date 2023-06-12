const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api"
const API_COHORT = "/2304-FTB-ET-WEB-FT"

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch (`${API_URL}${API_COHORT}/players`)
    const data = await response.json()
    return(data.data.players)
    
  } catch (error) {
    console.log("There is a fetching error: ", error)
  }
} 
  
