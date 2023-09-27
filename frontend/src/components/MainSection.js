import React from 'react';  //{ useEffect, useState }
import styled from 'styled-components';
import harbourImage from '../assets/harbour.jpg'; // Update the path
import logo from '../assets/logo.png';


const MainContainer = styled.section`
  background-image: url(${harbourImage});
  background-size: cover;
  background-position: center;
  height: 90vh; /* Adjust the height as needed */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  letter-spacing: 1px;
  padding-top: 80px;
 
`;

/*const HeroTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;*/
const Logo = styled.div`
  img {
    width: 400px; /* Adjust the logo width as needed */
  }
  padding-top:10px;
`;
const MainSubtitle = styled.h2`
  font-size: 54px;
  font-family: 'Lovers Quarrel';
  margin-bottom: 1px;
  color: #cd5132;
  margin-top: 1px;
`;

const MainText = styled.p`
  font-size: 19px;
  max-width: 950px; /* Adjust the max-width as needed */
  overflow-wrap: break-word;
  hyphens: auto;
`;


  const MainSection =() => {
    return (
    <MainContainer>
      <Logo>
        <a href="#start"><img src={logo} alt="Logo" /></a>
        </Logo>
      <MainSubtitle>Dlaczego warto</MainSubtitle>
      <MainText>Niezależnie od tego kim jesteś i jaka jest Twoja historia, zawsze możesz się zatrzymać i postawić na siebie. 
        Psychoterapia nie jest dla każdego, ale każdy może z niej skorzystać jako narzędzie rozwoju osobistego. 
        Nasza świadomość zdrowia psychicznego jest  większa. 
        Dzisiaj większość z nas zdaje sobie sprawę, jak ważne jest to, abyśmy potrafili radzić sobie z emocjami, 
        umieli nawiązywać i podtrzymywać satysfakcjonujące relacje oraz spełniali się  zawodowo. 
        Przystań to miejsce gdzie możesz wreszcie zająć się sobą, aby poprawić jakość swojego życia.</MainText>
    </MainContainer>
  );
};






export default MainSection;
