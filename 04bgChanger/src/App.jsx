import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div 
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className= "flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl">

          <button onClick={() => setColor("red")}  // on click needs a function , not the value returned from funtion 
           ClassName= "outline-none px-4 py-1  rounded-full text-white shadow-lg"
                style={{backgroundColor: "Red"}}>Red</button>
          <button onClick={() => setColor("green")} // thus callback is a function , that we are giving to on click
            ClassName= "outline-none px-4 py-1  rounded-full text-white shadow-lg"
                style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={() => setColor("blue")} ClassName= "outline-none px-4 py-1  rounded-full text-white shadow-lg"
                style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={() => setColor("purple")} 
            ClassName= "outline-none px-4 py-1  rounded-full text-white shadow-lg"
                style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("yellow")} 
            ClassName= "outline-none px-4 py-1  rounded-full text-white shadow-lg"
                style={{backgroundColor: "Yellow"}}>Yellow</button>
        </div>
      </div>
    </div>

  )
}

export default App