import { useState } from "react"

export default function counter(){
    const handleAdd =()=>{
        const newCount = count+1
        setCount(newCount)

    }
    const handleReduce =()=>{
        const newCount = count-1
        setCount(newCount)
    }
    const [count , setCount] = useState(0)
    return(
        
        <div style={{border:'2px solid red'}}>
            <h2>Counter:{count} </h2>
            <button onClick={handleAdd}  type="">Add</button>
            <button  onClick={handleReduce} type="">Reduce</button>
        </div>
    )
}