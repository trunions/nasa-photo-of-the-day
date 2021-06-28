import React from 'react'

function NasaInfo(props) {
    return(
        <div>
            <h2>{props.nasaData.title}</h2>
            <p>{props.nasaData.date}</p>
            <p>{props.nasaData.explanation}</p>
        </div>
    )
}

export default NasaInfo