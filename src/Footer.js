import styled from "styled-components";

export default function FooterComp() {
    return (
            <Footer>
                <Botoes>
                    <BotaoNaoLembrei>
                        Não lembrei
                    </BotaoNaoLembrei>
                    <BotaoQuaseNao>
                        Quase não lembrei
                    </BotaoQuaseNao>
                    <BotaoZap>
                        Zap!
                    </BotaoZap>
                </Botoes>
                0/4 CONCLUÍDOS
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
background: #FF3030;
border: #FF3030;
`
const BotaoQuaseNao = styled(Botao)`
background: #FF922E;
border: #FF922E;
`
const BotaoZap = styled(Botao)`
background: #2FBE34;
border: #2FBE34;
`