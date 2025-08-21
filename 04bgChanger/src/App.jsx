import {useState} from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div 
      className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 px-2">
          <button 
            onClick={() => setColor("red")} 
            className="px-4 py-1 bg-red-500 text-white rounded"
          >
            Red
          </button>
          <button 
            onClick={() => setColor("green")} 
            className="px-4 py-1 bg-green-500 text-white rounded"
          >
            Green
          </button>
          <button 
            onClick={() => setColor("blue")} 
            className="px-4 py-1 bg-blue-500 text-white rounded"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
