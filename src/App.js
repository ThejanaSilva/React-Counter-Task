import React, {useState} from 'react';


function App() {
  const [var1, changeVar1] = useState(0)
  function increase(){
    changeVar1 (var1+1)
  }
  function decrease(){
    changeVar1(var1-1)
  }

  const handleReset = () => (
    changeVar1(0)
  )

  const handleAdd5 = () => (
    changeVar1(var1 +5)
  )

  const handleMini3 = () => (
    changeVar1(var1 -3)
  )
    
  return <div>
    <h1>{var1}</h1>
    <button onClick={decrease}>Reduce by one</button>
    <button onClick={increase}>Increase by one</button>

    <button onClick={handleReset}> Reset to Zero </button>

    <button onClick={handleAdd5}> Add Five </button>

    <button onClick={handleMini3}> Deduct Three </button>
    </div>

}

export default App;
 