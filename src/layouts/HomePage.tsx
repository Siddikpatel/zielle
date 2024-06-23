import styles from "../styles/homepage.module.css";
import '../App.css';

export const HomePage = () => {

    return (
        <div className={styles.page}>
            <div className={styles.objective}>
                <img className={`img ${styles.shirts}`} src={require("../images/shirts.png")} alt="shirts"></img>
                <h1 className={styles.heading}>
                    Be the first to know about discounts!
                </h1>
                <a className={`btn ${styles.offerbtn}`} href="#">Check out!</a>
            </div>
            <div className={styles.promo}>
                <img className={`img ${styles.watches}`} src={require("../images/watches.png")} alt="wacthes"></img>
                <h2 className={styles.desc}>
                    Find the products here as soon as they are discounted
                </h2>
                <a className={`btn ${styles.signup}`} href="#">Sign up</a>
            </div>
        </div>
    );
}