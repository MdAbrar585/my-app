import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadData from './Component/LoadData/LoadData';
import GetData from './Component/GetData/GetData';

function App() {

  const friends = [
    {name : "Nafi", age : 12},
    {name : "Nimmi", age : 122},
    {name : "Simmi", age : 2},
    {name : "Safwat", age : 200} 
  ];
  
 
  
return (
    <div className="App">
      {
          friends.map( fd => <Friend frd={fd}></Friend>)
      }
     
      
    </div>
  );
}

function Friend(props){
  console.log(props);
  const [count,setCount] = useState(0);
  const {name, age} = props.frd;

  const handleButton = () => {
     setCount(count + 1);
    }
  return (
    <div className="container d-flex float-left justify-content-center text-center">
      <div style={{border:"1px solid", width:"50%", borderRadius:"10px",margin:"10px",padding:"10px"}}>
      {/* <GetData></GetData> */}
     <GetData></GetData>
      <h1>Name = {name}</h1>
      <h2>Age = {age}</h2>
      <h3>No : {count}</h3>
    
      <button className="btn btn-success" onClick={handleButton}> Click</button>
      </div>
     
    </div>
  )
}

export default App;
