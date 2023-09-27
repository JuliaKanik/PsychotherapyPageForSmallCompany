import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Import the social media icons
import logo from '../assets/logo.png';


const FooterContainer = styled.footer`
  background-color: white;
  color: black;
  padding: 20px 0;
  letter-spacing: 1px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 15px;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  max-width: 200px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

const Address = styled.p`
  margin: 0;
  margin-bottom: 10px;
`;

const PhoneEmail = styled.p`
  margin: 0;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 24px;
    margin-right: 10px;
    color: black;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="kontakt">
      <ContentContainer>
        <Logo img src={logo} alt="Logo" />
        <ContactInfo>
          <Address>Przystań Terapeutyczna- Centrum Psychoterapii i Rozwoju Karina Rudnicka <br>
          </br> ul. Energetyków 2
70-656 Szczecin
nip 955-191-15-12
regon 811 784 324 <br></br>
          </Address>
          <PhoneEmail>Telefon: 575 408 788</PhoneEmail>
          <PhoneEmail>Email: cptprzystan@gmail.com</PhoneEmail>
        </ContactInfo>
        <SocialIcons>
          <a href="https://www.instagram.com/psychoterapeutkawsieci/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/psychologrudnicka/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </SocialIcons>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
