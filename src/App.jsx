
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('button 2 clicked')
  }
  const addToFive=(num)=>{
    alert(num +2)
  }

  return (
    <>
      
      <h3> React Core Concepts 2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
     
      <button onClick={handleClick} type="">Click Me</button>
      <button onClick={handleClick2} type="">Click Me2</button>
      
      <button onClick={()=>{alert('third button clicked')}} type="">third </button>
      {/*vejaillaa*/}
      <button  onClick={()=>addToFive(2)} type="">click me 4</button>
      
    </>
  )
}

export default App
