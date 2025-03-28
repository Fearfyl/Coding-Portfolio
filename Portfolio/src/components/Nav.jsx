
import '../style/Navigation.css';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const currentPage = useLocation().pathname;

    return (
        <>
            <h1>Kaviyarasi Krishnan</h1>
            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <Link
                            to="/About"
                            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Portfolio"
                            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact"
                            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Resume"
                            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;