import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
max-width: 600px;


figcaption{
  padding-top: 2rem;
  font-style: italic;
  
}
`

export default function Figure({imageURL, date}){
    return (
        <StyledFigure>
        <img src = {imageURL}/>
        <figcaption>Amazing picture taken on {date}</figcaption>
      </StyledFigure>
      )
}