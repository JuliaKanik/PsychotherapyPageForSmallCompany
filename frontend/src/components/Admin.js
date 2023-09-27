import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Import axios
import AdminExpertManagement from './AdminExpertManagement'; // Import the AdminExpertManagement component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AdminContainer = styled.div`
  background-color: #255f5e;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 20px;
  text-align: center;
  min-width: 30%;
`;

const LoginTitle = styled.h2`
  color: #cd5132; /* Color change for the login title */
  margin-bottom: 20px; /* Added spacing below the title */
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; /* Increased gap between input areas */
  padding:10px;
`;

const LoginButton = styled.button`
  background-color: #255f5e;
  color: white;
  font-size: 17px; /* Increased font size for the button */
  padding: 10px 20px; /* Added padding to make the button larger */
  margin: 12px;
  border: 1px #cd5132 solid;;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #cd5132;
  }

  &:active {
    background-color: #cd5132; /* Color change on click */
  }
`;

function Admin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loginMessage, setLoginMessage] = useState(''); // State to store login message
  const [loggedIn, setLoggedIn] = useState(false); 


  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      // Make a POST request to your Express backend's login route
      const response = await axios.post('/api/login', credentials);

      // Check the response from the backend
      if (response.status === 200) {
        // Login successful
        setLoginMessage('Login successful');
        setLoggedIn(true); // Set loggedIn to true after successful login
        // You may want to redirect the user to the admin section here
        navigate("/admin/adminmanagement")
      
      } else {
        // Login failed
        setLoginMessage('Login failed');
      }
    } catch (error) {
      // Handle any network or server errors here
      console.error('Error:', error);
      setLoginMessage('An error occurred during login');
    }
  };

  return (
    <CenteredContainer>
      <AdminContainer>
        <LoginTitle>Login</LoginTitle>
        {loggedIn ? (
          <div>
           <h2>Welcome, Admin!</h2>
           <button onClick={handleLogout}>Log Out</button>
           <Router>
            <Routes>
              <Route path="adminmanagement" element={<AdminExpertManagement />} />
            </Routes>
          </Router>
         </div>
          // Render AdminExpertManagement when loggedIn is true
  
        ) : (
          // Render the login form when loggedIn is false
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </InputContainer>
          <LoginButton type="submit">Login</LoginButton>
        </form>
        )}
        <div>{loginMessage}</div> {/* Display login message */}
      </AdminContainer>
    </CenteredContainer>
  );
}

export default Admin;
