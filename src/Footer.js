import { useState } from "react"
import styled from "styled-components";
import deck from "./deck.js"

export default function FooterComp(props) {
    const {onAnswer, openedCard, cardsAnswer, flippedCard, onCardClosure} = props
    const {setTurnCard} = props
    const {setCardContent} = props
    const answeredCounter = Object.keys(cardsAnswer).length;
    const naoLembreiOnClick = () => {
        onAnswer (prevState => ({
            ...prevState, 
            [openedCard]:"NAO_LEMBREI"
        }))
        onCardClosure(null);
    }

    const quaseLembreiOnClick = () => {
        onAnswer (prevState => ({
            ...prevState, 
            [openedCard]:"QUASE_LEMBREI"
        }))
        onCardClosure(null);
    }

    const zapLembreiOnClick = () => {
        onAnswer (prevState => ({
            ...prevState, 
            [openedCard]:"ZAP"
        }))
        onCardClosure(null);
    }

const disabled = !flippedCard[openedCard]
    return (
            <Footer>
                <Botoes>
                    <BotaoNaoLembrei
                    onClick={naoLembreiOnClick}
                    disabled={disabled}
                    >
                        Não lembrei
                    </BotaoNaoLembrei>
                    <BotaoQuaseNao
                    onClick={quaseLembreiOnClick}
                    disabled={disabled}
                    >
                        Quase não lembrei
                    </BotaoQuaseNao>
                    <BotaoZap
                    onClick={zapLembreiOnClick}
                    disabled={disabled}
                    >
                        Zap!
                    </BotaoZap>
                </Botoes>
                {answeredCounter}/{deck.length} CONCLUÍDOS
            </Footer>
    )
}


const Footer = styled.div`
width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
`

const Botoes = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;
`

const Botao = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
border-radius: 5px;
border: 1px solid;
padding:5px;
`

const BotaoNaoLembrei = styled(Botao)`
${(props) => props.disabled ? "background:black;" : "background:#FF3030;"}
border: #FF3030;
`
const BotaoQuaseNao = styled(Botao)`
${(props) => props.disabled ? "background:black;" : "background:#FF922E;"}
border: #FF922E;
`
const BotaoZap = styled(Botao)`
${(props) => props.disabled ? "background:black;" : "background:#2FBE34;"}
border: #2FBE34;
`