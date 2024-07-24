import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css"
import '../App.css'

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <div className={styles.ack}>
                <ul>
                    <li>Browse</li>
                    <li><Link to="/home">Home</Link></li>
                    <li>Discounts</li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <ul>
                    <li>Websites</li>
                    <li>Freepik</li>
                    <li>Amazon</li>
                    <li>Myntra</li>
                    <li>Bewakoof</li>
                    <li>Flipkart</li>
                </ul>
                <ul>
                    <li>Me</li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                    <li>Instagram</li>
                    <li>Email</li>
                </ul>
                <ul>
                    <li>Donate Me</li>
                </ul>
            </div>
            <div className={styles.copyright}>
                <p>&#169; <time>{currentYear}</time> Siddik Patel</p>
            </div>
        </div>
    );
}