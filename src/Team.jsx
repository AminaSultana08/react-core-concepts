import { useState } from "react"

export default function Team(){
    const [team, setTeam] =useState(11)
    const handleAdd=()=>{
        const newTeam=team+1
        setTeam(newTeam)
    }
    const handleRemove =()=>{
        {/* const newTeam = team-1
        setTeam(newTeam)*/}
        setTeam(team-1)
    }
    const teamStyle={
        border: '2px solid magenta',
        borderRadius: '10px',
        margin :'20px',
        padding:'20px'
    }
    const btnStyle={
        backgroundColor:'purple',
        color:'white'

    }
    return(
        <div style={teamStyle} >
            <h2> players: {team} </h2>
            <button  onClick={handleAdd}  style={btnStyle}   type=""> Add </button>
            <button  onClick={handleRemove} style={btnStyle}  type="">Remove</button>
        </div>
    )
}