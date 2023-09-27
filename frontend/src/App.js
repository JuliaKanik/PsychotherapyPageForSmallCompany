import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainSection from './components/MainSection';
import Header from './components/Header';
import Services from './components/Services';
import ExpertSection from './components/Experts';
import ContactForm from './components/ContactForm';
import OfficeMap from './components/OfficeMap';
import Footer from './components/Footer';
import KomuPomagamy from './components/KomuPomagamy';
import Admin from './components/Admin';
import AdminExpertManagement from './components/AdminExpertManagement'

function NotFound() {
  return <h1>404 Not Found</h1>; // Your custom 404 page component
}

function App() {
  return (
    <Router>
      <Header />   
      <Routes>
        <Route path="/" element={<><Navigation /><MainSection /><KomuPomagamy /><Services /><ExpertSection /><ContactForm /><OfficeMap /><Footer /></>} />
        <Route path="/admin" element={<Admin />}>
          {/* Child routes of /admin */}
          <Route path="adminmanagement" element={<AdminExpertManagement />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for unmatched routes */}
      </Routes>
    </Router>
  );
}

export default App;
