import React, {Fragment, Component} from 'react';
import './App.css';

function App() {
  const name ='Joan of ark'

  const loading= true;
  
  return (
    <div>
     {loading? <h4>Loading ....</h4> : <h2>Hemi hi page ani {name}</h2> }
     
    </div>
  );
}

export default App;
