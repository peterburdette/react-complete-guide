import React, { useState, useEffect } from "react";

// The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider.
// the value is a property that can be updated via state and can be passed down to all child components
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export const authContextProvider = () => {
    useEffect(() => {
        const storedUserLoggedInInformation =
            localStorage.getItem("isLoggedIn");

        if (storedUserLoggedInInformation === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
