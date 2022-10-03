import { useState } from "react"
import styled from "styled-components";
import Logo from "./Logo";
import Perguntas from "./Perguntas";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle"

/* let aux = [];
function buildArray() {
    for (let i = 0; i < deck.length; i++)
    aux.push("");
    console.log(aux);
}

buildArray(); */

export default function App() {
    const [openedCard, setOpenedCard] = useState(null)
    const [cardsAnswer, setCardsAnswer] = useState({})

    return (
            
            <Container>
                <GlobalStyle/>
                <Logo/>
                <Perguntas 
                    openedCard={openedCard}
                    onCardClick={setOpenedCard}
                />
{/*                 <Footer turnCard={turnCard} setTurnCard={setTurnCard} cardContent={cardContent} setCardContent={setCardContent} cardFinisehd={cardFinisehd} setCardFinished={setCardFinished}/>
 */}            </Container>
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