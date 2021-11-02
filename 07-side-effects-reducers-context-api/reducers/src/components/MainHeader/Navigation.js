import React from "react";
import AuthContext from "../../context/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
    return (
        // Consumer is a React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.
        <AuthContext.Consumer>
            {/* Consumer always returns a function with a return statement where content is rendered */}
            {(ctx) => {
                return (
                    <nav className={classes.nav}>
                        <ul>
                            {ctx.isLoggedIn && (
                                <li>
                                    <a href="/">Users</a>
                                </li>
                            )}
                            {ctx.isLoggedIn && (
                                <li>
                                    <a href="/">Admin</a>
                                </li>
                            )}
                            {ctx.isLoggedIn && (
                                <li>
                                    <button onClick={props.onLogout}>
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </nav>
                );
            }}
        </AuthContext.Consumer>
    );
};

export default Navigation;
