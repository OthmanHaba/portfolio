import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <Header />
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        {/* Footer content can be added here */}
      </footer>
    </div>
  );
};

export default Layout; 