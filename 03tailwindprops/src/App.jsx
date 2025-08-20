import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "tanishk",
    age: 21
  }
  let newArr= [1,2,3]


return (
    <div className="text-black bg-gray-400">
      <h1 className='bg-green-200 p-4 text-black'  > Hello Tailwind</h1>
      <h2> Enlighted</h2>

      <Card username="Tanishk Rajak" btnText = "Click Me!" />
      <Card username="Aryan Choudhary" btnText = "Visit Me!" />

  </div>
);

}

export default App
