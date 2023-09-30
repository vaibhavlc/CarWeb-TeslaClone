import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
        
        <FootWrapper>
            <FootMenu>
                <a href="#">Tesla © 2021</a>
                <a href="#">Privacy & Legal</a>
                <a href="#">Contact</a>
                <a href="#">Careers</a>
                <a href="#">News</a>
                <a href="#">Engage</a>
                <a href="#">Locations</a>
            </FootMenu>
        </FootWrapper>
    )
}

export default Footer

const FootWrapper = styled.div`
    width : 100%;
    background-color: white;
     min-height : 60px;
     display:flex;
     justify-content : center;
     align-items : center;
     flex:1;

`

const FootMenu = styled.div`

    a{
        padding : 0 10px;
        color:grey;
        font-size: 14px;
    }
    a:hover{
        color:black;
    }

`