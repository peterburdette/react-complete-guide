import React from "react";
import CartIcon from "../cart/CartIcon";
import styles from "../ui/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    );
};

export default HeaderCartButton;
