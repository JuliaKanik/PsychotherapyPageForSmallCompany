import React, { useState } from 'react';
import styled from 'styled-components';
import phone_icon from '../assets/phone_icon.png';
import instagram_icon from '../assets/instagram_icon.png';
import facebook_icon from '../assets/facebook_icon.png';
import email_icon from '../assets/email_icon.png';
import contact_us from '../assets/contact_us.jpg';



const ContactSection = styled.div`
  background-color: white;  
  width: 50%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  color: black;
  padding-bottom: 20px;
  border: 1px solid black;
  font-size: 19px;
  margin: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding-top: 10px;
`;

const Icon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
`;

const IconImage = styled.img`
  width: 60px; /* Adjust the icon width as needed */
  height: 60px; /* Adjust the icon height as needed */
`;

const ContactImage = styled.img`
  width: 560px; /* Adjust the icon width as needed */
  height: auto; /* Adjust the icon height as needed */
  padding-top: 40px;
`;


const MyContainer =  styled.div`
display: flex;
`;

const FormContainer = styled.div`
  background-color: white;  
  width: 50%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  color: black;
  padding-bottom: 20px;
  border: 1px solid black;
  font-size: 19px;
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 54px;
  font-family: 'Lovers Quarrel';
  max-height: 10px;
  color: #255f5e;
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 75%;
  font-size: 19px;
  letter-spacing: 1px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 45%;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  font-weight: bold;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* Expand the input to the form's width */
  max-width: 100%; /* Ensure the input doesn't exceed the form's width */
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 100%; /* Ensure the textarea doesn't exceed the form's width */
`;

const Button = styled.button`
  background-color: #cd5132;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Proszę wyrazić zgodę na przetwarzanie danych osobowych.');
      return;
    }
    // Send the form data to the email address (simulate sending)
    const email = 'przystantara@gmail.com';
    console.log('Sending message to:', email);
    console.log('Form Data:', formData);
    // You would typically perform an actual email sending action here
  };

  return (
    <MyContainer>
    <FormContainer id="wizyta">
      <Title>Formularz kontaktowy</Title>
      <Paragraph>
      < p>Zapraszamy do skorzystania z naszych terapii, gdzie skupiamy się na Twoim zdrowiu i dobrej kondycji zarówno fizycznej, jak i emocjonalnej. Nasz doświadczony zespół specjalistów jest gotowy, by Cię wesprzeć na Twojej drodze do lepszego samopoczucia. Nie zwlekaj - zapisz się już dziś i daj sobie szansę na pozytywną przemianę!</p> 
      </Paragraph>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Imię i nazwisko *</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phoneNumber">Numer telefonu *</Label>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Adres e-mail *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="consent">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={(e) =>
                setFormData((prevData) => ({
                ...prevData,
                consent: e.target.checked,
              }))
            }
            />
            Wyrażam zgodę na przetwarzanie danych osobowych.
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Twoja wiadomość *</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
          />
        </FormGroup>
        <Button type="submit">Wyślij</Button>
      </Form>
    </FormContainer>

    
    <ContactSection>
      <Title>Skontaktuj się z nami na własnych zasadach</Title>
      <Paragraph>
        Jesteśmy przyjazni i szanujemy Twoją prywatność. Twoje dane są u nas bezpieczne.
      </Paragraph>
      <IconContainer>
        <Icon href="tel:575-408-788">
          <IconImage src={phone_icon} alt="Phone" />
          Telefon
        </Icon>
        <Icon href="https://www.instagram.com/psychoterapeutkawsieci/">
          <IconImage src={instagram_icon} alt="Instagram" />
          Instagram
        </Icon>
        <Icon href="https://www.facebook.com/psychologrudnicka/">
          <IconImage src={facebook_icon} alt="Facebook" />
          Facebook
        </Icon>
        <Icon href="mailto:cptprzystan@gmail.com">
          <IconImage src={email_icon} alt="Email" />
          Email
        </Icon>
      </IconContainer>
      <ContactImage src={contact_us} alt="contact"></ContactImage>

    </ContactSection>
    </MyContainer>
  );
};

export default ContactForm;
