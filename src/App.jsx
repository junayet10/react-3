import React, { useRef } from 'react';

const App = () => {
  let dataStorage = useRef(null);
  let api = useRef();
  let call = async () =>{
    let res = await fetch('https://dummyjson.com/products');
    dataStorage.current = await res.json();

  }

let show = () =>{
 api.current.innerText = JSON.stringify( dataStorage.current)
}

  return (
    <div>
      <p ref={api}></p>
      <button onClick={call}> API</button>
      <button  onClick={show}>show api</button>
    </div>
  );
};

export default App;