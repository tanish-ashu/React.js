import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

return (
  <div className="background-color fill-black bg-black flex flex-col items-center justify-center gap-4 p-8">
    <h1 className="bg-green-400 text-black p-6 text-2xl rounded">Tailwind test</h1>
    <h1 className="text-3xl font-bold underline text-red-500">Hello Tailwind!</h1>
    <div className='flex gap-4'>
        <Card username="chaiaurcode" btnText="click me" />
        <Card username="hitesh" />
      </div>
  </div>
);

}

export default App
