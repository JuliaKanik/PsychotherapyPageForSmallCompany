import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  background-color: #255f5e;
  position: relative;
  width: 100%;
  top: 0; /* Stick the navigation to the top of the viewport */
`;

const NavigationList = styled.nav`
  display: flex;
  justify-content: center;
  gap: 100px; /* Adjust the gap as needed */
  padding: 15px 0; /* Add vertical padding for spacing *
`;

const NavigationItem = styled.div`
  padding: 10px 15px;
  z-index: 6;
  letter-spacing: 0;
  text-transform: uppercase;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  letter-spacing:1px;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: #cd5132;
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <a href="#terapiaonline">Terapia online</a>
        </NavigationItem>
        <NavigationItem>
          <a href="#komupomagamy">Komu pomagamy</a>
        </NavigationItem>
        <NavigationItem>
          <a href="#zespol">Zespół</a>
        </NavigationItem>
        <NavigationItem>
          <a href="#wizyta">Umów wizyte</a>
        </NavigationItem>
        <NavigationItem>
          <a href="#oferta">Oferta</a>
        </NavigationItem>
        <NavigationItem>
          <a href="#kontakt">Kontakt</a>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};

export default Navigation;
