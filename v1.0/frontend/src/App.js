import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [data, setdata] = useState({
    name: "",
    age:""
  });

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setdata({
                name: data.Name,
                age: data.Age
            });
        })
    );
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Flask connection test</h1>
        
        <form action='' method='POST'>
          <p>Form name = <input type="text" name="formName"/></p>
          <p>Form age = <input type="text" name="formAge"/></p>
          <input type="submit" name="submit"/>
        </form>

        <p>Server Name : {data.name}</p>
        <p>Server Age : {data.age}</p>
      </header>
    </div>
  );
}

export default App;
