import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
function App() {
  const [count, setCount]= useState(0);
  useEffect(()=>{
    document.title=`you clicked ${count}`;
  });
  return (
    <div className='container my-5'>
    <div className='card text-center my-5'>
    <div className="card-body">
      <h1> Counter App</h1>
      <p>  {count} </p>
      <button className='btn btn-success mx-3' onClick={()=> setCount(count+1)}>
        Increment
      </button>

      
      <button className='btn btn-secondary mx-3' onClick={()=> setCount(count-1)}>
        Decrement
        

      </button>
    </div>
    </div>
    </div>
  );
}

export default App;
     