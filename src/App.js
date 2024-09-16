import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import NasaInfo from "./components/nasaInfo";
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color:black;
  width:100%;
  height:100%;
  `

const StyledH1 = styled.h1`
  color: white;
  font-size:3rem;
  
`;

const HeaderDiv = styled.div`
  display:flex;
  justify-content:center;
  `

  const ImgDiv = styled.div`
    display:flex;
    justify-content:center;
    `

    const NasaInfoDiv = styled.div`
    text-align:center;
    color:white;
    padding:5% 5%;
    `


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
    <StyledDiv>
      <HeaderDiv>
      <StyledH1>NASA Photo of the Day</StyledH1>
      </HeaderDiv>
      <ImgDiv>
      <img src={nasaData.url} alt={nasaData.title} />
      </ImgDiv>
      <NasaInfoDiv>
        <NasaInfo nasaData={nasaData} />
        </NasaInfoDiv>
    </StyledDiv>
  );
}

export default App;
