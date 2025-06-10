import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contacts from './pages/Contacts';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const locale = localStorage.getItem('locale') || 'en';
    i18n.changeLanguage(locale);
    document.body.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
  }, [i18n]);

  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App; 