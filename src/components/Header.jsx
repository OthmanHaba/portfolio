import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLocale = () => {
    const currentLocale = i18n.language;
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    localStorage.setItem('locale', newLocale);
    i18n.changeLanguage(newLocale);
    document.body.setAttribute('dir', newLocale === 'ar' ? 'rtl' : 'ltr');
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/" className="logo-text">
          <span className="code-tag">&lt;&gt;</span> Othman.Haba.dev
        </Link>
      </div>
      <div className="nav-links">
        <Link 
          to="/about" 
          className={`nav-link ${isActive('/about') ? 'active' : ''}`}
        >
          {t('nav.about')}
        </Link>
        <Link 
          to="/resume" 
          className={`nav-link ${isActive('/resume') ? 'active' : ''}`}
        >
          {t('nav.resume')}
        </Link>
        <Link 
          to="/contacts" 
          className={`nav-link ${isActive('/contacts') ? 'active' : ''}`}
        >
          {t('nav.contacts')}
        </Link>
      </div>
      <div className="social-links">
        <a href="https://x.com/TRAFALG73496987" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/othman-haba-350b95262/" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/oth_haba/" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/othman.elhadi.712" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-facebook"></i>
        </a>
        <button className="btn btn-primary" onClick={toggleLocale}>
          {i18n.language === 'ar' ? 'English' : 'العربية'}
        </button>
      </div>
    </nav>
  );
};

export default Header; 