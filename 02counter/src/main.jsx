import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// this create root function creates ,
//  behind the seen same dom live browser dom,
//  later it compare main dom and this dom ,and changes only where require (tracking and changing tree updation),
//  where as the browser's dom changes the complete dom (page reload happens, webStructure re-ready).

// and 'React fiber' algorithm is used to update this virtual dom.
// key features - ability to pause, abort and reuse work as new updates come in;
// the ability to assign priority to different types of updates;

// first paint of web layout then -> hydration -> javascript inject after buttons

// reconciliation -> The algorithm React uses to diff one tree with another to determine which parts need to be changed.
// update -> A change in the data used to render a React app. Usually the result of 'setState'. Eventually results in a re-render.

// Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM".
// Diffing of lists is performed using keys. keys should be "stable, predictable, and unique".(perfomace increased).

// fiber -> pause work and come back to it later, assign priority to different types of work, reuse previously completed work, abort work if it's no longer needed.


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
