import styled from "styled-components";
import Logo from "./Logo";
import Perguntas from "./Perguntas";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle"

export default function App() {
    return (
            
            <Container>
                <GlobalStyle/>
                <Logo/>
                <Perguntas/>
                <Footer/>
            </Container>
    )
}

const Container = styled.div`
font-family: Righteous;
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`