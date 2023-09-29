import React from 'react';
import styled from 'styled-components';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

const ExpertSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  letter-spacing: 1px;
`;

const ExpertCard = styled.div`
  border: 1px solid #255f5e;
  padding: 20px;
  width: 30%;
  text-align: center;

  img {
    width: 140px;
    height: auto;
    margin-bottom: 10px;
  }

  .name {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  .education {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 10px;
  }

  .more-link {
    color: #cd5132;
    text-decoration: none;
    font-weight: bold;
  }
`;

const expertsData = [
  {
    id: 1,
    name: 'mgr Marta Smolińska',
    education: 'Absolwentka Akademii Ekonomiczno-Humanistycznej w Warszawie na kierunku psychologia (specjalności kliczniczej i seksuologicznej).  Psychoterapeutka w procesie certyfikacji w Szkole Psychoterapii Crescentia. Członek Polskiego Towarzystwa Psychoterapii Poznawczo-Behawioralnej.',
    imageSrc: pic1,
    link: 'https://www.znanylekarz.pl/marta-smolinska-2/psycholog/szczecin',
  },
  {
    id: 2,
    name: 'mgr Karina Rudnicka',
    education: 'Jestem dyplomowanym psychologiem i psychoterapeutą. Ukończyłam Krakowską Szkołę Psychoterapii w Nurcie Integracyjnym. Pomorskie Centrum Psychotrumatologii- w trakcie szkolenia z psychotraumatologii praktycznej. Stowarzyszenie na rzecz Rozwoju Psychiatrii i Opieki Środowiskowej - 4,5 letni kurs psychoterapii integralnej. Uniwersytet Szczeciński- kierunek psychologia kliniczna Wyższa Szkoła Integracji Europejskiej- podyplomowe studia Przygotowanie Pedagogiczne',
    imageSrc: pic2,
    link: 'https://www.znanylekarz.pl/karina-rudnicka/psycholog-psychoterapeuta/szczecin',
  },
  {
    id: 3,
    name: 'mgr Natalia Ćwikiel',
    education: 'Ukończyłam studia magisterskie z psychologii na Uniwersytecie Szczecińskim. Jestem w procesie certyfikacji  z Psychoterapii Systemowej w ramach Wielkopolskiego Towarzystwa Psychoterapii Systemowej.',
    imageSrc: pic3,
    link: 'https://www.znanylekarz.pl/natalia-cwikiel/psycholog/szczecin',
  },
];

const ExpertSection = () => {
  return (
    <div>
      <h1>Nasz Zespół</h1>
      <ExpertSectionContainer id="zespol">
        {expertsData.map((expert) => (
          <ExpertCard key={expert.id}>
            <img src={expert.imageSrc} alt={expert.name} />
            <div className="name">{expert.name}</div>
            <div className="education">{expert.education}</div>
            <a className="more-link" href={expert.link}>
              Umów wizytę
            </a>
          </ExpertCard>
        ))}
      </ExpertSectionContainer>
    </div>
  );
};

export default ExpertSection;
export {expertsData};
