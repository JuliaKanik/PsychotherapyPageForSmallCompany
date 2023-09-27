import React from 'react';
import styled from 'styled-components';
import oceanVideo from '../assets/ocean.mp4';

const Container = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 1vh;
  overflow: hidden;
  letter-spacing: 1px;
  border-top: solid white 10px;
  border-bottom: solid white 10px;
  margin: 20px;

`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Prevent video from covering the whole container */
  object-position: center top; /* Adjust the positioning */
  z-index: -1;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.7);
`;



const Title = styled.h1`
  font-size: 54px;
  margin-top: 1px;
  margin-bottom: 10px;
  color: #cd5132;
  font-family: 'Lovers Quarrel';
`;

const Text = styled.p`
  font-size: 19px;
  max-width: 950px;
  overflow-wrap: break-word;
  hyphens: auto;
  text-align: center;
  color: #333;
`;


const KomuPomagamy = () => {
  return (
    <Container id="komupomagamy">
      <BackgroundVideo autoPlay loop muted>
        <source src={oceanVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <ContentContainer>
        <Title>Komu pomagamy</Title>
        <Text>Pomagamy każdemu kto jest chętny zatrzymać się i odbyć podróż w głąb siebie aby się rozwijać. Ponadto pomagamy osobom doświadczających trudności natury emocjonalnej tj.  osobom depresyjnym, lękowym, doświadczającym stanów niepokoju, zamartwiania się, poczuciem braku sensu, obniżonego poczucia własnej wartości,  trudnościami w nawiązywaniu relacji czy tkwiącymi w przemocowych związkach.  Pomagamy też młodym dorosłym w kryzysie związanym z dojrzewaniem i wejściem w dorosłe życie. Udzielamy  konsultacji rodzicom potrzebującym wsparcia, niezależnie od wieku dziecka. Parom będącym w kryzysie , pomagamy zrozumieć co się dzieje w ich związku i w jaki sposób mogą sobie poradzić. Jeśli czujesz, że potrzebujesz zmian w swoim życiu, zapraszamy Cię na spotkanie.
</Text>
      </ContentContainer>
    </Container>
  );
};

export default KomuPomagamy;
