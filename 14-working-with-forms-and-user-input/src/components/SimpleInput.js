import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    // if the enteredName is not empty return true and store inside of enteredNameIsValid
    const enteredNameIsValid = enteredName.trim() !== "";
    // checks to see if the enteredNameIsValid is invalid and checks to see if the enteredNameTouched is false
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    // setting the default state of formIsValid
    let formIsValid = false;

    // checks to see if all input states are valid (add more conditions to the conditional if there are more fields)
    if (enteredNameIsValid) {
        formIsValid = true;
    }

    // handles onChange - whenever a user types in the field
    const nameInputChangeHandler = (event) => {
        console.log("onChange");
        setEnteredName(event.target.value);
    };

    // handles onBlur - whenever a user clicks out of the field
    const nameInputBlurHandler = (event) => {
        console.log("onBlur");
        setEnteredNameTouched(true);
    };

    // handles form submission
    const formSubmissionHandler = (event) => {
        event.preventDefault();

        // sets state to true when form is submitted because all inputs are 'touched' aka confirmed by the user
        setEnteredNameTouched(true);

        // basic validation - checks to see if enteredNameIsValid is false
        if (!enteredNameIsValid) {
            return;
        }

        console.log("useState ", enteredName);

        // reset the form states
        setEnteredName("");
        setEnteredNameTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
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
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
