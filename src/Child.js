import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child() {
  let value=useContext(ValueContext)
  return (
    <div >
      Hello From Child {value[0]}
    </div>
  );
}

export default Child;
