import React, { Component } from "react";
import classes from "./User.module.css";

export default class User extends Component {
    componentWillUnmount() {
        console.log("User will unmount.");
    }

    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
}

// import classes from './User.module.css';

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// export default User;