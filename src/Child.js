import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child() {
  let value=useContext(ValueContext)
  return (
    <div >
      Hello From Child {value}
    </div>
  );
}

export default Child;
