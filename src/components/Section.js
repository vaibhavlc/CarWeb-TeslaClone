import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title ,description,backgroundImg , leftBtnText, rightBtnText}) {
    return (
      <Wrap bgImg = {backgroundImg}>
          <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p> {description} </p>
            </ItemText>
         </Fade>
         <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                                {leftBtnText}
                        </LeftButton>

                    {rightBtnText && <RightButton> {rightBtnText} </RightButton> } 
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"/>
         </Buttons>
      </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-image : ${props =>  `url("/images/${props.bgImg}")`};
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: space-between;

`
const ItemText = styled.div`
    text-align : center;
    padding-top : 15vh; 
`
const Buttons =styled.div``
const ButtonGroup = styled.div`
    display:flex;
    align-items: center;
    justify-content : space-between;   
    margin-bottom : 30px; 
    cursor : pointer;
    @media (max-width : 786px){
        flex-direction : column;
    }
`


const LeftButton = styled.div`
background-color : rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color:white;
display: flex;
opacity: 0.85;
text-transform : uppercase;
align-items: center;
justify-content : center;
border-radius : 100px;
font-size : 12px; 
font-weight : 200;
margin : 8px

`
const RightButton = styled(LeftButton)`
   
background :white;
opacity : 0.65;
color : Black;
    
`
const DownArrow = styled.img`
margin-top : 20px;
height : 40px;
overflow-x : hidden;
animation : animeteDown infinite 1.5s;
`  