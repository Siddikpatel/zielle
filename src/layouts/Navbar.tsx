import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import '../App.css';
import { useEffect, useRef, useState } from 'react';

export const Navbar = () => {

    // const showSidebar: any = (element: HTMLElement) => {
    //     element.style.display = 'flex';
    // }

    // const hideSidebar: any = (element: HTMLElement) => {
    //     element.style.display = 'none';
    // }

    const [isVisible, setIsVisible] = useState(false);

    return (

        <>
            <div className={styles.nav}>
                <div className={styles.icon}>Z</div>
                <div className={`${styles.nav_desktop}`}>
                    <ul>
                        <li className={styles.hideOnMobile}>
                            <NavLink to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className={styles.hideOnMobile}>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className={styles.hideOnMobile}>
                            Donate Me
                        </li>
                        <li onClick={() => setIsVisible(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </li>
                    </ul>                    
                </div>
                <div className={`${styles.nav_mobile}`}>
                    <ul className={`${styles.nav_elements}`}>
                        <li onClick={() => setIsVisible(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </li>
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
                        <li>
                            Donate Me
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}