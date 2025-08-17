/* Simple function returning html */
import Work from "./Work";

function App() {
  const username = "React Code";
  /* the below username used is the evaluted expression means we can write final outcome there
      and not the expresion which is yet to be evaluted i.e if() then etc.  evalution step should be some here this section 
  */
  return (
    <>

    <h1> This is React Foundation with {username} </h1>  
    <Work></Work>

    </>
  )
}
export default App;
