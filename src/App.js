import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import NasaInfo from "./components/nasaInfo";


function App() {

  const [nasaData, setNasaData]= useState({})

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=I7FKEo5cyioKDlwxTjWorNCaEg8P0SWvuZkXMoNN')
      .then(response => {
        setNasaData(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <img src={nasaData.url} alt={nasaData.title} />
      <div>
        <NasaInfo nasaData={nasaData} />
      </div>
    </div>
  );
}

export default App;
