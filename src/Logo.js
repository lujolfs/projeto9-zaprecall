import styled from "styled-components";
import logo from "./assets/img/logo.png"

export default function LogoComp() {
    return (
            <Logo>
                <LogoImg src={logo} alt="Logo do app ZapRecall" />
                <LogoHeader>ZapRecall</LogoHeader>
            </Logo>
    )
}

const Logo = styled.div`
font-family: Righteous;
display: flex;
align-items: center;
margin: 40px 0 20px 0;
`

const LogoImg = styled.img`
width: 52px;
`

const LogoHeader = styled.h1`
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
color: #FFFFFF;
margin-left: 20px;
`