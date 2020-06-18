import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
function App() {
  let [number,setNumber]=useState(45);
  return (
    <div >
      Hello from App
<Parent num={number}></Parent>
<button onClick={()=>{setNumber(++number)}}> update</button>
    </div>
  );
}

export default App;
