import React from 'react';
import Product from './Components/Product';
function App() {
  function Name(props){
   return <h1> Hello World {props.firstName}</h1>
  }
  
  return (
    <div className="App">
      <h1 name="patrick">Hello </h1>
      <Product productName="#Lipstick#"/>
      <Name firstName="asdsadas"/>
    </div>
  );
}

export default App;
