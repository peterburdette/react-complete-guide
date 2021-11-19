import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    // if the enteredName is not empty return true and store inside of enteredNameIsValid
    const enteredNameIsValid = enteredName.trim() !== "";
    // checks to see if the enteredNameIsValid is invalid and checks to see if the enteredNameTouched is false
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

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
    const nameInputChangeHandler = (event) => {
        console.log("name onChange");
        setEnteredName(event.target.value);
    };

    // handles onBlur - whenever a user clicks out of the field
    const nameInputBlurHandler = (event) => {
        console.log("name onBlur");
        setEnteredNameTouched(true);
    };

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
        setEnteredName("");
        setEnteredNameTouched(false);

        setEnteredEmail("");
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
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
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
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
