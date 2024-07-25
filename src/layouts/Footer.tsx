import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css"
import '../App.css'

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <div className={styles.ack}>
                <ul className={`${styles.col1}`}>
                    <li>Browse</li>
                    <li onClick={() => window.scrollTo(0, 0)}><Link to="/home">Home</Link></li>
                    <li>Discounts</li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <ul className={`${styles.col2}`}>
                    <li>Websites</li>
                    <li>Freepik</li>
                    <li>Amazon</li>
                    <li>Myntra</li>
                    <li>Bewakoof</li>
                    <li>Flipkart</li>
                </ul>
                <ul className={`${styles.col3}`}>
                    <li>Me</li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                    <li>Instagram</li>
                    <li>Email</li>
                </ul>
                <ul className={`${styles.col4}`}>
                    <li>Donate Me</li>
                </ul>
            </div>
            <div className={styles.copyright}>
                <p>&#169; <time>{currentYear}</time> Siddik Patel</p>
            </div>
        </div>
    );
}