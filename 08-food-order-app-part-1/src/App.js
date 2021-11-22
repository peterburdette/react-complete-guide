import React, { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const handleShowCart = () => {
        setCartIsShown(true);
    };

    const handleHideCart = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onHideCart={handleHideCart} />}
            <Header onShowCart={handleShowCart} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
