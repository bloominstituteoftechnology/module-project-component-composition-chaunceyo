import React from "react";
import Figure from "./Figure";
import styled from 'styled-components'

const StyledCard = styled.div`
border: 3px solid black;
padding: 2rem;
border-radius: 16px;

h2 {
  font-size: 2.5em;
  margin: 0 0 2rem 0;
  color: ${pr => pr.$color};  //$ gets rid of color prop on DOM
}

p {
  margin: 0 0 3rem 0;

  &::first-line {
    font-size: 2em;
  }
}
`

export default function Card({title, text, imageURL, date}){
    return (
        <StyledCard $color='red' className = 'card'> 
        <h2>{title}</h2>
        <p>{text}</p>
        <Figure 
        imageURL={imageURL} date={date}
        />
      </StyledCard>
    )
}