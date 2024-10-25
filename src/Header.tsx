import React from 'react';
import logo from './assets/logo.svg'; // Adjust path if necessary

const Header: React.FC = () => {
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
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '50px',
    backgroundColor: '#000055',
    padding: '0 20px',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
  },
};

export default Header;