import React, { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import styles from "./Form.module.css";
import ErrorModal from "./ui/ErrorModal";

const Form = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    // sets the name to the state
    const handleNameUpdate = (event) => {
        setEnteredName(event.target.value);
    };

    // sets the age to the state
    const handleAgeUpdate = (event) => {
        setEnteredAge(event.target.value);
    };

    // handles the form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // error handling - stores the object with the title and message inside of 'error'
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }
        // error handling - stores the object with the title and message inside of 'error'
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0).",
            });
            return;
        }

        // generates a random number for the id - not the best way
        const generatedId = Math.floor(Math.random() * 100000);

        const formData = {
            id: generatedId,
            name: enteredName,
            age: enteredAge,
        };

        // sends the 'formData' object to App.js
        props.onSaveUserData(formData);

        // resets form
        setEnteredName("");
        setEnteredAge("");
    };

    // receives the onClick event from the ErrorModal.js and resets the state
    const handleError = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={handleError}
                />
            )}

            <Card className={styles.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredName}
                        onChange={handleNameUpdate}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={handleAgeUpdate}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default Form;
