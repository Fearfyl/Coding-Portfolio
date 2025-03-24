import React from 'react';
import '../styles/Footer.css';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import linkedin from '../assets/linked.png'

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <nav>
                    <ul style={styles.navList}>
                    <li> <a href="wadebuchanan18@gmail.com"><img src = {gmail} alt = "gmail" width="30"></img></a> </li>
   <li> <a href="https://github.com/Fearfyl"><img src = {github} alt = "gmail" width="30"></img></a> </li>
   <li> <a href="https://www.linkedin.com/in/wade-buchanan-4a971034a/"><img src = {linkedin} alt = "gmail" width="30"></img></a> </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};


export default Footer;