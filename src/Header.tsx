import React from 'react';
import logo from './assets/logo.svg';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    width: "100%",
    "align-items": "center",
    "justify-content": "flex-start",
    height: "50px",
    "background-color": "#102747",
    padding: "0 20px",
    color: "white",
  },
  logoContainer: {
    display: "flex",
    "align-items": "center",
  },
  logo: {
    width: "50px",
    height: "50px",
  },
};

export default Header;