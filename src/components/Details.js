import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    width:20%;
    border-bottom: 2px dashed black;


    p{
        font-weight:bold;
        &:hover{
            color:tomato;
        }
    }

    h2{
        font-weight:bold;
        &:hover{
            color:darkgoldenrod;
        }
    }
`

function Details (props) {
    const { characterDetails } = props

    return (
        <StyledDetails>
            <h2>{characterDetails.name}</h2>
            <p>Gender: {characterDetails.gender}</p>
            <p>Height: {characterDetails.height}</p>
            <p>Mass: {characterDetails.mass}</p>
            <p>Birth Year: {characterDetails.birth_year}</p>
            <p>Eye Color: {characterDetails.eye_color}</p>
            <p>Hair Color: {characterDetails.hair_color}</p>
            <p>Skin Color: {characterDetails.skin_color}</p>
        </StyledDetails>
    )
}

export default Details;