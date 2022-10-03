import { useState } from "react"
import styled from "styled-components";
import setaPlay from "./assets/img/seta_play.png"
import setaVirar from "./assets/img/seta_virar.png"
import deck from "./deck.js";

const shuffledDeck = deck.sort(() => Math.random() - 0.5);

export default function PerguntasCopm() {
    const [turnCard, setTurnCard] = useState()
    const [cardContent, setCardContent] = useState(true)

    return (
        <Perguntas>
            {shuffledDeck.map((d) => ((turnCard === shuffledDeck.indexOf(d)) ? (
                <PerguntaAberta
                key={shuffledDeck.indexOf(d)}>
                    {cardContent ? d.pergunta : d.resposta}
                    <img src={setaVirar} alt="Clique aqui para revelar a resposta." onClick={() => setCardContent(!cardContent)} />
                </PerguntaAberta>) :
                (<PerguntaFechada
                key={shuffledDeck.indexOf(d)}
                onClick={() => {setTurnCard(shuffledDeck.indexOf(d)); setCardContent(true)}}>
                    <p>Pergunta {shuffledDeck.indexOf(d)+1}</p>
                    <img src={setaPlay} alt="Clique aqui para iniciar esse cartão." />
                </PerguntaFechada>)
            ))
            }
        </Perguntas>
    )
}

const Perguntas = styled.div`
font-family: Righteous;
`

const PerguntaFechada = styled.div`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const PerguntaAberta = styled.div`
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }
`