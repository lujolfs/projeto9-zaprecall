import styled from "styled-components";
import setaPlay from "./assets/img/seta_play.png"
import setaVirar from "./assets/img/seta_virar.png"
import deck from "./deck.js";
import Pergunta from "./Pergunta";

const shuffledDeck = deck.sort(() => Math.random() - 0.5);


export default function PerguntasCopm(props) {
    const {openedCard, onCardClick, cardsAnswer, onFlipCard, flippedCard} = props 


    return (
        <Perguntas>
            {shuffledDeck.map((card, index) => 
            (
                <Pergunta
                userAnswer = {cardsAnswer[index]}
                key = {index}
                question = {card.pergunta}
                answer = {card.resposta}
                title = {`Pergunta ${index +1}`}
                onClick = {() => {onCardClick(prevState => {
                    return (
                        prevState === index ?
                        null : index
                    )
                })}}
                flipped = {flippedCard[index]}
                onFlipCard = {() => onFlipCard(prevState =>({...prevState, [index]:true}))}
                opened = {index === openedCard}
                />
            ))}
        </Perguntas>
    )
}

const Perguntas = styled.div`
font-family: Righteous;
`

