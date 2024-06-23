import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import '../App.css';

export const Navbar = () => {

    return (

        <div className={styles.nav}>
            <div className={styles.icon}>Z</div>
            <ul>
                <li>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
            <div className={styles.donate}>Donate Me</div>
        </div>
    );
}