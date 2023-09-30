import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';

function Header() {

    const [burgerState, setburgerState] = useState(false)
    
    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="Tesla" />
            </a>
            <Menu>
                <a href="https://www.tesla.com/models">Model S</a>
                <a href="https://www.tesla.com/model3">Model 3</a>
                <a href="https://www.tesla.com/modelx">Model X</a>
                <a href="https://www.tesla.com/modely">Model Y</a>
                <a href="https://www.tesla.com/solarroof">Solar Roof</a>
                <a href="https://www.tesla.com/solarpanels">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick = {()=>{ setburgerState(true) }}/>
            </RightMenu>
            <BurgerNav status={burgerState} >
                <CloseWrapper>
                     <CustomClose  onClick={ ()=>{  setburgerState(false) } } />
                </CloseWrapper> 
                <li><a href="#">Existing</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="https://www.tesla.com/cybertruck">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Trade in</a></li>
                <li><a href="#">Investor Relations</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
   min-height : 60px;
   top : 0;
   left : 0;
   right: 0;
   display: flex;
   justify-content : space-between;
   align-items : center;
   position : fixed;    
   padding : 0 20px;
   z-index : 1;
`

const Menu = styled.div`

    display:flex;
    justify-content: center;
    align-items : center;
    flex: 1;

    a{  
        text-transform: uppercase;
        font-weight : 600;
        padding : 0 10px;
        flex-wrap : nowrap;
    }
    @media(max-width : 768px){
        display : none;  
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items : center; 
a{
    text-transform: uppercase;
    font-weight : 600;
    padding : 0 10px;
    flex-wrap : nowrap;
    

}
`
const CustomMenu = styled(MenuIcon)`
    cursor : pointer;

`

const BurgerNav = styled.div`
    position : fixed;
    top : 0;
    bottom: 0;
    right: 0;
    background: white;
    width : 300px;
    z-index: 10;
    list-style : none;
    padding : 20px;
    display : flex;
    flex-direction : column;
    text-align : start;
    transform : ${ props => props.status ? 'translateX(0)' : 'translateX(100%)' } ;
    transition : transform 0.3s ease-in; 
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    li{
        width : 100%;
        padding : 15px 0;
        border-bottom : 1px solid rgba(0,0,0,.2);
     a{
        font-weight : 600;
     }
    }
`
const CustomClose = styled(CloseIcon)`
    

`
const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`