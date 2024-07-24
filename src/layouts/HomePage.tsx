import styles from "../styles/homepage.module.css";
import '../App.css';

export const HomePage = () => {

    return (
        <div>
            <div className={styles.objective}>
                <img className={`img ${styles.ipads}`} src={require("../images/ipads.png")} alt="shirts"></img>
                <img className={`img ${styles.hat}`} src={require("../images/hat.png")} alt="shirts"></img>
                <img className={`img ${styles.shirts}`} src={require("../images/shirts.png")} alt="shirts"></img>
                <h1 className={`${styles.heading}`}>
                    Be the first to know about discounts!
                </h1>
                <a className={`btn ${styles.offerBtn}`} href="#">Check out!</a>
            </div>
            <div className={`${styles.objective}`}>
                <img className={`img ${styles.watches}`} src={require("../images/watches.png")} alt="wacthes"></img>
                <h2 className={`${styles.heading} ${styles.heading2} ${styles.flex_align_right}`}>
                    Find the products here as soon as they are discounted
                </h2>
                <a className={`btn ${styles.signupBtn} ${styles.flex_align_right}`} href="#">Sign up</a>
            </div>
        </div>
    );
}