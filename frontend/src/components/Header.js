import React from 'react';
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Import the social media icons


const HeaderContainer = styled.div`
  background-color: white;
  padding: 25px;
  font-size: 15px;
  letter-spacing: 1px;
  z-index: 10;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  
`;
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 950px;

  svg {
    font-size: 27px;
    margin-right: 10px;
    color: #cd5132;
    cursor: pointer;
  }
`;


const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 60px; /* Add padding to create space to the right */
  margin-left: auto; /* Move the component to the right */
  align-items: center; /* Align items vertically if needed */
  font-size: 19px;
  color: rgba(0, 0, 0, 0.7);
`;

const Logo = styled.div`
  img {
    width: 130px; /* Adjust the logo width as needed */
  }
  padding:1px 50px 40px 50px;
  position: fixed; 
   top: 10px; /* Adjust the top distance from the top of the viewport */
  left: 20px;
`;

const PhoneNumber = styled.div`
  /* Add any specific styling for the phone number */
`;

const Email = styled.div`
  /* Add any specific styling for the email */
`;

const Header = () => {
  return (
    <HeaderContainer id="start">
      <HeaderContent>
        <Logo >
        <a href="/"><img src={logo} alt="Logo" /></a>
        </Logo>
        <SocialIcons>
          <a href="https://www.instagram.com/psychoterapeutkawsieci/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/psychologrudnicka/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </SocialIcons>
        <ContactInfo>
          <PhoneNumber>Telefon: 575 408 788</PhoneNumber>
          <Email>Email: cptprzystan@gmail.com</Email>
        </ContactInfo>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
