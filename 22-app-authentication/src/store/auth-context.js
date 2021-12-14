import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    // checks to see if there is a localstorage item named 'token' - it will either return the token or undefined
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        // utilizing localstorage to store the token so that the user isn't logged out on a page refresh
        localStorage.setItem("token", token);
    };

    const logoutHandler = (token) => {
        setToken(false);
        // removes the 'token' in the localstorage on logout
        localStorage.removeItem("token");
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
