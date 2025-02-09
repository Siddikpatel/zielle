import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import '../App.css';
import { useEffect, useRef, useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';

export const Navbar = () => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isSidebarVisible ? 'hidden' : 'unset';
    }, [isSidebarVisible]);

    return (

        <>
            <div className={styles.nav}>
                <div className={styles.icon}>Z</div>
                <div className={`${styles.nav_desktop}`}>
                    <ul>
                        <li className={styles.hideOnMobile} onClick={() => window.scrollTo(0, 0)}>
                            <NavLink to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className={styles.hideOnMobile} onClick={() => window.scrollTo(0, 0)}>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className={styles.hideOnMobile} onClick={() => window.scrollTo(0, 0)}>
                            Donate Me
                        </li>
                        <li onClick={() => setIsSidebarVisible(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </li>
                    </ul>                    
                </div>
                {isSidebarVisible &&
                    <div className={`${styles.nav_mobile}`}>
                        <ul className={`${styles.nav_elements}`}>
                            <li onClick={() => setIsSidebarVisible(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </li>
                            <li onClick={() => {setIsSidebarVisible(false); window.scrollTo(0,0)}}>
                                <NavLink to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li onClick={() => {setIsSidebarVisible(false); window.scrollTo(0,0)}}>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li onClick={() => {setIsSidebarVisible(false); window.scrollTo(0,0)}}>
                                Donate Me
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </>
    );
}