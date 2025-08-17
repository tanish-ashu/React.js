import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // propogates the change on UI\
  // returns array containing two things - variable, method controlling variable
  let [counter, setCounter] = useState(0);

  // let counter = 0;

  const addValue = ()=>{
    if(counter == 20){
      return;
    }
  //counter = counter + 1;
    setCounter(counter + 1);
  }
  const removeValue = () =>{
    if(counter == 0){
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1> React Learning</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}>Add value {counter}</button>
      <br/>
      <br/>
      <button
      onClick = {removeValue} >Remove value {counter}</button>
      <br/>
      <br/>
      footer: {counter}
    </>
  )
}

export default App
