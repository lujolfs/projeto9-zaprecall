import styled from "styled-components";
import setaPlay from "./assets/img/seta_play.png"
import setaVirar from "./assets/img/seta_virar.png"

function getIcon(answer, opened) {
    if (!answer) {
        return opened ? setaVirar : setaPlay;
    }
    return setaPlay;
}

export default function Pergunta({ opened, question, answer, title, onClick }) {
    const iconDisplay = getIcon(answer, opened);

    if (!opened) {
        return (
            <PerguntaFechada
                onClick={onClick}>
                <p>{title}</p>
                <img src={iconDisplay} alt="Clique aqui para iniciar esse cartão." />
            </PerguntaFechada>
        )
    }
    return (
        <PerguntaAberta>
                {answer ? answer : question}
                <img src={iconDisplay} alt="Clique aqui para revelar a resposta." onClick={onClick} />
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