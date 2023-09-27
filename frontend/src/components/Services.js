import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';


// Define a styled component for the column container
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

// Define a styled component for each section
const ColumnSection = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

// Define a styled component for the content on the left
const ColumnContent = styled.div`
  flex: 1;
  padding: 20px;
  border: black solid 1px;
`;

// Define a styled component for the image on the right
const ColumnImage = styled.img`
  max-width: 600px;
  height: auto;
`;

// Define a styled component for the subtitle
const Subtitle = styled.h2`
  font-size: 54px;
  font-family: 'Lovers Quarrel';
  margin: 10;
  padding-left: 20px;
  color: #255f5e;
`;

// Define a styled component for the text
const Text = styled.p`
  margin: 0;
  font-size: 19px;
  letter-spacing: 1px;

`;

const Services = () => {
  return (
    <ColumnContainer>
      <ColumnSection>
        <ColumnContent>
          <Subtitle>co to jest psychoterapia i co powoduje zmianę?</Subtitle>
          <Text>Psychoterapia jest metodą leczenia chorób psychicznych, zaburzeń emocjonalnych czy somatycznych za pomocą oddziaływań psychologicznych. 
        Polega na rozmowie pomiędzy pacjentem a terapeutą. Jednym z najważniejszych czynników wpływających na przebieg terapii jest relacja 
        pojawiająca się pomiędzy pacjentem a terapeutą. Osoba potrzebująca pomocy w atmosferze szacunku, zaufania i akceptacji, może przyglądać
        się sobie, swoim dotychczasowym nieadaptacyjnym mechanizmom radzenia sobie i przeżywania, 
        a pod wpływem terapii w bezpiecznych warunkach modyfikować je na takie, które będą przynosiły długoterminowe korzyści. Często ludzie działają na podświadomych poziomach. Psychoterapia może pomóc w uświadomieniu tych procesów i ich wpływu na zachowania i emocje. Terapeuci mogą nauczać klientów nowych umiejętności radzenia sobie z trudnościami, takie jak techniki radzenia sobie ze stresem, komunikacja interpersonalna, czy rozwiązywanie konfliktów.</Text>
        </ColumnContent>
        <ColumnImage src={img1} alt="change image" /> 
      </ColumnSection>
      <ColumnSection id="oferta">
        <ColumnContent>
          <Subtitle>psychoterapia dzieci i młodzieży</Subtitle>
          <Text>Dzieciństwo nas kształtuje. Wiemy, jak ważny jest to okres i w jaki sposób przekłada się na nasze dorosłe życie. 
        Oferujemy wsparcie psychologiczne i psychoterapię dzieci i młodzieży. Jeśli Twoje dziecko jest do 12 r.ż. na pierwszą 
        konsultację zapraszamy rodziców. Młodym adolescentom od 13 r.ż. proponujemy pierwsze spotkanie z rodzicami. 
        Pomagamy dzieciom i młodzieży mającymi trudności natury emocjonalnej, problemy z identyfikacją płciową, zaniżoną samooceną
        czy autodestrukcyjnymi zachowaniami.  W myśl zasady, że rodzic jest pierwszym i najważniejszym terapeutą w życiu dziecka,
        współpracujemy jednocześnie z rodzicami, podnosząc ich kompetencje rodzicielskie, ucząc sposobów komunikacji z dzieckiem
        oraz radzenia sobie ze swoimi oraz dziecka emocjami. W pracy łączymy kierunki terapeutyczne, wykorzystując zarówno 
        terapeutyczną rozmowę, jak i kreatywne techniki pracy z elementami gier i zabaw, pracy wyobrażeniowej, czy relaksacji.</Text>
        </ColumnContent>
        <ColumnImage src={img2} alt="kids image" />
      </ColumnSection>
      <ColumnSection>
        <ColumnContent>
          <Subtitle>psychoterapia dorosłych</Subtitle>
          <Text>Oferujemy kompleksową terapię dla dorosłych, dostosowaną do indywidualnych potrzeb każdego klienta. Nasz doświadczony zespół terapeutów specjalizuje się w obszarach takich jak radzenie sobie ze stresem, lękiem, depresją oraz trudnościami życiowymi. Wspólnie dążymy do poprawy Twojego samopoczucia i jakości życia, świadomie tworząc przestrzeń wsparcia i zrozumienia. Niezależnie od tego, czy borykasz się z trudnościami emocjonalnymi, relacyjnymi czy zawodowymi, nasi eksperci służą pomocą w odkrywaniu zdrowszych sposobów radzenia sobie i osiągania pełni potencjału. Skontaktuj się z nami już dziś, by rozpocząć Twoją drogę ku lepszemu samopoczuciu i psychicznemu równowadze.
          Twoja prywatność i bezpieczeństwo są dla nas najważniejsze. Nasza praktyka psychoterapeutyczna jest miejscem, gdzie możesz czuć się swobodnie, w pełni chroniony/chroniona, i możesz mieć pewność, że wszelkie informacje i rozmowy są ściśle poufne i zachowane w tajemnicy.</Text>
        </ColumnContent>
        <ColumnImage src={img3} alt="therapy image" />
      </ColumnSection>
    </ColumnContainer>
  );
}

export default Services;
