import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="mailto:your-email@gmail.com" style={styles.navLink}>Gmail</a></li>
                        <li style={styles.navItem}><a href="https://github.com/your-github-username" style={styles.navLink}>GitHub</a></li>
                        <li style={styles.navItem}><a href="https://www.linkedin.com/in/your-linkedin-username" style={styles.navLink}>LinkedIn</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};


export default Footer;