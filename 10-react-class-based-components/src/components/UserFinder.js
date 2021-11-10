import { Fragment, Component } from "react";

import Users from "./Users";
import styles from "./UserFinder.module.css";
import UsersContext from "../store/users-context";

export default class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            searchTerm: "",
            filteredUsers: [],
        };
    }

    componentDidMount() {
        // send http request...
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prefProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name
                        .toLowerCase()
                        .includes(this.state.searchTerm.toLowerCase())
                ),
            });
        }
    }

    searchChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <Fragment>
                <div className={styles.finder}>
                    <input
                        type="search"
                        onChange={this.searchChangeHandler.bind(this)}
                    />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
}

// import { Fragment, useState, useEffect } from "react";

// import Users from "./Users";
// import styles from "./UserFinder.module.css";

// const DUMMY_USERS = [
//     { id: "u1", name: "Max" },
//     { id: "u2", name: "Manuel" },
//     { id: "u3", name: "Julie" },
// ];

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) =>
//                 user.name.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <div className={styles.finder}>
//                 <input type="search" onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

// export default UserFinder;
