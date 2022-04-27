# myFisrtRepository
const express = require('express');
const dbConnect = require('mongodb');
const bodyParser = require('body-parser');
const app = express();

app.get('/', async (req, res) => {
    let data = await dbConnection();
    data = data.find().toarray();
    res.send({ name: 'abc', email:'abc123@gmai.com', phoneNumber:'1234567890'})
});

app.listen(5000,(err)=>{if(err)console.log('failed'), console.log('running on port:5000')});








 import logo from './logo.svg';
import './App.css';
import React, { useEffect,useState } from 'react'

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("uri").then((result)=>{
      result.json().then((res)=>{
        setData(res)
  
      })
  })
  },[])
  console.warn(data)
  // for deleting the elements
  function deleteUser()
  {
    fetch("uri ")
  }
  return (
    <div className="App" >
      <h1>Get API</h1>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>PhoneNumber</td>
        </tr>
        {
          data.map((item)=> 
          <tr>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{item.PhoneNumber}</td>
          {/*for deleting */}
          <td><button onclick={()=>deleteUser((item))}>Delet</button></td>
        </tr>
          )
        }
      </table>
    </div>
  );
}

export default App;







