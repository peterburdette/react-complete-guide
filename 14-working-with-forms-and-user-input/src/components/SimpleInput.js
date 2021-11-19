import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    // using 'useInput' hook - extracting values from the return inside of 'use-input.js'
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== ""); // passing an anonymous arrow function into 'useInput' which is received as the 'validateValue' parameter in 'use-input.js'

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    // if the enteredEmail is not empty return true and store inside of enteredEmailIsValid
    const enteredEmailIsValid =
        enteredEmail.trim() !== "" && enteredEmail.includes("@");
    // checks to see if the enteredEmailIsValid is invalid and checks to see if the enteredEmailTouched is false
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    // setting the default state of formIsValid
    let formIsValid = false;

    // checks to see if all input states are valid (add more conditions to the conditional if there are more fields)
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // handles onChange - whenever a user types in the field
    const emailInputChangeHandler = (event) => {
        console.log("email onChange");
        setEnteredEmail(event.target.value);
    };

    // handles onBlur - whenever a user clicks out of the field
    const emailInputBlurHandler = (event) => {
        console.log("email onBlur");
        setEnteredEmailTouched(true);
    };

    // handles form submission
    const formSubmissionHandler = (event) => {
        event.preventDefault();

        // basic validation - checks to see if enteredNameIsValid is false
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        console.log("useState - enteredName: ", enteredName);
        console.log("useState - enteredEmail: ", enteredEmail);

        // reset the form states
        resetNameInput();

        setEnteredEmail("");
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && (
                    <p className="error-text">Please provide a valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
