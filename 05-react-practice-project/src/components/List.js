import React from "react";
import Card from "./ui/Card";
import styles from "./List.module.css";

const List = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.userList.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default List;
