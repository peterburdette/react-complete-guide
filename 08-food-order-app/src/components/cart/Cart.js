import React, { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../ui/Modal";
import styles from "../cart/Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const handleCartItemRemove = (id) => {};

    const handleCartItemAdd = (item) => {};

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {cartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        summary={item.summary}
                        price={item.price}
                        onRemove={handleCartItemRemove.bind(null, id)}
                        onAdd={handleCartItemAdd.bind(null, item)}
                    />
                );
            })}
        </ul>
    );

    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <div>
                    <span>Total Amount</span>
                </div>
                <div>{cartTotalAmount}</div>
            </div>
            <div className={styles.actions}>
                <button
                    className={styles["button--alt"]}
                    onClick={props.onHideCart}
                >
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
