import React,{useState} from 'react';

import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';
function App() {
  let value=useState(85);
  
  return (
    <ValueContext.Provider value={value}>
    <div >
      Hello from App
<Parent ></Parent>
<button onClick={()=>{value[1](++value[0])}}>update</button>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
