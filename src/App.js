import React, {useState} from 'react';


function App() {
  const [var1, changeVar1] = useState(0)
  function increase(){
    changeVar1 (var1+1)
  }
  function decrease(){
    changeVar1(var1-1)
  }
    
  return <div>
    <h1>{var1}</h1>
    <button onClick={decrease}>Reduce by one</button>
    <button onClick={increase}>Increase by one</button>
    </div>

}


export default App;
 