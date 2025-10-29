import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MyNetflix. All rights reserved.</p>
      <div>
        <a style={styles.link} href="#privacy">Privacy Policy</a> | 
        <a style={styles.link} href="#terms">Terms of Service</a> | 
        <a style={styles.link} href="#contact">Contact Us</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '50px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#111',
    color: '#fff',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  link: {
    color: '#fff',
    margin: '0 5px',
    textDecoration: 'none'
  }
};
