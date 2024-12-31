import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© {new Date().getFullYear()} My App. All rights reserved.</p>
            <nav>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="/privacy" style={styles.navLink}>Privacy Policy</a></li>
                    <li style={styles.navItem}><a href="/terms" style={styles.navLink}>Terms of Service</a></li>
                </ul>
            </nav>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
        padding: '10px 20px',
        marginTop: '20px',
    },
    text: {
        margin: '10px 0',
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        margin: '10px 0 0 0',
    },
    navItem: {},
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '14px',
    },
};

export default Footer;
