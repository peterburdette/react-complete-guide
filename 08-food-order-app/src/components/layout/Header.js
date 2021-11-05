import React from "react";
import image from "../../assets/meals.jpg";
import HeaderCartButton from "../ui/HeaderCartButton";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles["main-image"]}>
                <img src={image} alt="meals" />
            </div>
        </>
    );
};

export default Header;
