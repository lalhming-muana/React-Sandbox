import React, {Fragment, Component} from 'react';
import './App.css';

function App() {
  const name ='Joan of ark'

  const loading= false;
  if(loading){
    return <h4>Loading ....</h4>
  }

  return (
    <Fragment>
     <h1>Hello from react</h1>
     <h2>Test page {name}</h2>
    </Fragment>
  );
}

export default App;
