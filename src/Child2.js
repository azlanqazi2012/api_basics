import React, { useReducer } from 'react';
import numberReducer from './numberReducer';


function Child2() {
  let [number,dispatch]=useReducer(numberReducer,68);
  return (
    <div >
      Hello From Child2 {number}
      <button onClick={()=>{dispatch({type:'INCREMENT',val:5})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'DECREMENT',val:5})}}>Decrement</button>
  
    </div>
  );
}

export default Child2;
