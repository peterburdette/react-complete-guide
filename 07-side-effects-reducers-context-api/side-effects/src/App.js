import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 'useEffect' always takes two params - first is a function and the second is an array of dependencies
    // 'useEffect' will run once the page is rendered once and will check to see if the user is logged in
    useEffect(() => {
        // fetches the key/value pair for isLoggedIn
        const storedUserLoggedInInformation =
            localStorage.getItem("isLoggedIn");

        // checks to see if the user has already been logged in
        if (storedUserLoggedInInformation === "1") {
            setIsLoggedIn(true);
        }
        // this code will only run once because there are no dependencies - no dependency changes means this code won't run again
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways

        // stores data in local storage (localStorage)
        localStorage.setItem("isLoggedIn", "1");
        // once credentials are given the state is updated and the page is re-rendered and 'useEffect' is run again
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    );
}

export default App;
