import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';
function App() {
  let value=78;
  let [number,setNumber]=useState(45);
  return (
    <ValueContext.Provider value={value}>
    <div >
      Hello from App
<Parent ></Parent>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
