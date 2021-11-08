import React from "react";
import Modal from "../ui/Modal";
import styles from "../cart/Cart.module.css";

const Cart = () => {
    const cartItems = (
        <ul className={styles["cart-items"]}>
            {[{ id: "1", name: "sushi", amount: 2, price: 12.99 }].map(
                (item) => {
                    <li>{item.name}</li>;
                }
            )}
        </ul>
    );

    return (
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <div>
                    <span>Total Amount</span>
                </div>
                <div>35.95</div>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
