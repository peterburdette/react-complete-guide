import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        // checks to see if there is a value that has been entered
        if (event.target.value.trim().length > 0) {
            // sets the state of isValid to 'true' so the inline styling is dynamically updated
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        // checks to see if the enteredValue is empty
        if (enteredValue.trim().length === 0) {
            // sets the state of isValid to 'false' so the inline styling is dynamically updated
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label style={{ color: !isValid ? "red" : "black" }}>
                    Course Goal
                </label>
                <input
                    type="text"
                    style={{
                        backgroundColor: !isValid ? "salmon" : "transparent",
                        borderColor: !isValid ? "red" : "#ccc",
                    }}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
