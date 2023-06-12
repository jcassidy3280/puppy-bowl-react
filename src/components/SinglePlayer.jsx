import { useNavigate } from "react-router-dom"

const SelectSinglePlayer = (props) => {
    const playerNav = useNavigate()
    return (
        <div className="player-name">
            <h4 onClick = {()=> {playerNav(`/selectedPlayer/${props.element.id}`)}} >{props.element.name}</h4>
        </div>
    )
}

export default SelectSinglePlayer