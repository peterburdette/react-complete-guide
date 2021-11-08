import React from "react";
import Modal from "../ui/Modal";
import styles from "../cart/Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={styles["cart-items"]}>
            {[{ id: "1", name: "sushi", amount: 2, price: 12.99 }].map(
                (item) => {
                    return <li key={item.id}>{item.name}</li>;
                }
            )}
        </ul>
    );

    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <div>
                    <span>Total Amount</span>
                </div>
                <div>35.95</div>
            </div>
            <div className={styles.actions}>
                <button
                    className={styles["button--alt"]}
                    onClick={props.onHideCart}
                >
                    Close
                </button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
