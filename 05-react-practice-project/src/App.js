import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
    const data = [
        // { id: 1, name: "Bob", age: 29 },
        // { id: 2, name: "John", age: 33 },
        // { id: 3, name: "Jane", age: 28 },
    ];

    const [userData, setUserData] = useState(data);

    const handleUserData = (data) => {
        setUserData((prevData) => {
            return [data, ...prevData];
        });
    };

    return (
        <div id="wrapper">
            <Form onSaveUserData={handleUserData} />
            {userData.length > 0 && <List userList={userData} />}
        </div>
    );
}

export default App;
