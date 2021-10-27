import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${(props) => (props.invalid ? "red" : "black")};
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
        background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }
`;

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
            {/* passes the true/false state of 'isValid via prop to the css in the backticks */}
            <FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
