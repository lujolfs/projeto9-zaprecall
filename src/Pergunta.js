import styled, { css } from "styled-components";
import setaPlay from "./assets/img/seta_play.png"
import setaVirar from "./assets/img/seta_virar.png"
import iconeCerto from "./assets/img/icone_certo.png"
import iconeErro from "./assets/img/icone_erro.png"
import iconeQuase from "./assets/img/icone_quase.png"


function getIcon(answer, opened) {
    if (!answer) {
        return opened ? setaVirar : setaPlay;
    }
    const iconObject = {
        "NAO_LEMBREI": iconeErro,
        "QUASE_LEMBREI": iconeQuase,
        "ZAP": iconeCerto
    }
    return iconObject[answer] || setaPlay;
}

export default function Pergunta({ opened, question, answer, title, onClick, flipped, onFlipCard, userAnswer }) {
    const iconDisplay = getIcon(userAnswer, opened);

    if (!opened) {
        return (
            <PerguntaFechada
                onClick={onClick}
                userAnswer={userAnswer}
            >
                <p>{title}</p>
                <img src={iconDisplay} alt="Clique aqui para iniciar esse cartão." />
            </PerguntaFechada>
        )
    }
    return (
        <PerguntaAberta>
            {flipped ? answer : question}
            <img src={iconDisplay} alt="Clique aqui para revelar a resposta." onClick={onFlipCard} />
        </PerguntaAberta>
    )
}




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
        ${(props) => {
        const fontObject = {
            "NAO_LEMBREI": {color: "#FF3030", textDecoration: "line-through"},
            "QUASE_LEMBREI": {color: "#FF922E", textDecoration: "line-through"},
            "ZAP": {color: "#2FBE34", textDecoration: "line-through"}
        }
        const fontConfig = fontObject[props.userAnswer] || {color:"#333333", textDecoration: "none"}
        return css`
        color: ${fontConfig.color};
        text-decoration: ${fontConfig.textDecoration};
        `
    }}
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