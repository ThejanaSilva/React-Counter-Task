import React, {useState} from 'react';


export default function App() {
  const [var1, changeVar1] = useState(0)
  function increase(){
    changeVar1 (var1+1)
  }
  function decrease(){
    changeVar1(var1-1)
  }

  function Reset() {
    changeVar1(0)
  }

  function Add() {
    changeVar1(var1+5)
  }

  function Minimize() {
    changeVar1(var1-3)
  }
    
  return <div>
    <h1>{var1}</h1>
    <button onClick={decrease}>Reduce by one</button>
    <button onClick={increase}>Increase by one</button>

    <button onClick={Reset}> Reset to Zero </button>

    <button onClick={Add}> Add Five </button>

    <button onClick={Minimize}> Deduct Three </button>
    </div>

}

//export default App;
 