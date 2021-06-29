import React from 'react'
import styled from 'styled-components'


const StyledH2 = styled.h2`
    color:white;
    `
function NasaInfo(props) {
    return(
        <div>
            <StyledH2>{props.nasaData.title}</StyledH2>
            <p>{props.nasaData.date}</p>
            <p>{props.nasaData.explanation}</p>
        </div>
    )
}

export default NasaInfo