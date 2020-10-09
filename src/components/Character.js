// Write your Character component here
import React from 'react'
import Details from './Details.js'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    display:flex;
    flex-flow:wrap;
    width:100%;
    

`


function Character (props){
    const { character } = props

    return (
        <StyledCharacter>
            {character.map(ch => (
                <Details characterDetails = {ch} />
            ))} 
        </StyledCharacter>
    )
}

export default Character;