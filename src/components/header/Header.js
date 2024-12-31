import React from 'react';
import logo from '../../assets/images/icons/logo.svg';
import "./header.scss";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="header">
                        <div className="logo">
                            <a href="/"><img src={logo} alt="logo" /></a>
                        </div>
                        <nav>
                            <a href="/" className="active">Home</a>
                            <a href="/work">Work</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                        </nav>
                        <button className="header-btn">Contect Me</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#282c34',
        padding: '10px 20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        margin: 0,
    },
    navList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '15px',
    },
    navItem: {},
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Header;
