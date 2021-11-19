import React from "react";
import useUserInput from "../hooks/use-userInput";

const BasicForm = (props) => {
    const {
        value: fNameInputValue,
        hasError: fNameError,
        isValid: fNameIsValid,
        valueChangedHandler: fNameChangedHandler,
        fieldBlurHandler: fNameBlurHandler,
        reset: fNameReset,
    } = useUserInput((value) => value !== "");

    const {
        value: lNameInputValue,
        hasError: lNameError,
        isValid: lNameIsValid,
        valueChangedHandler: lNameChangedHandler,
        fieldBlurHandler: lNameBlurHandler,
        reset: lNameReset,
    } = useUserInput((value) => value !== "");

    const {
        value: emailInputValue,
        hasError: emailError,
        isValid: emailIsValid,
        valueChangedHandler: emailChangedHandler,
        fieldBlurHandler: emailBlurHandler,
        reset: emailReset,
    } = useUserInput((value) => value !== "" && value.includes("@"));

    let formIsValid = false;

    if (fNameIsValid && lNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const submissionHandler = (event) => {
        event.preventDefault();

        if (!fNameIsValid || !lNameIsValid || !emailIsValid) {
            return;
        }

        console.log(
            `fNameInputValue: ${fNameInputValue}, lNameInputValue: ${lNameInputValue}, emailInputValue: ${emailInputValue}`
        );

        // form reset
        fNameReset();
        lNameReset();
        emailReset();
    };

    const fNameInputClasses = fNameError
        ? "form-control invalid"
        : "form-control";

    const lNameInputClasses = lNameError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={submissionHandler}>
            <div className="control-group">
                <div className={fNameInputClasses}>
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        value={fNameInputValue}
                        onChange={fNameChangedHandler}
                        onBlur={fNameBlurHandler}
                    />
                    {fNameError && (
                        <p className="error-text">
                            First Name must not be empty.
                        </p>
                    )}
                </div>
                <div className={lNameInputClasses}>
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        value={lNameInputValue}
                        onChange={lNameChangedHandler}
                        onBlur={lNameBlurHandler}
                    />
                    {lNameError && (
                        <p className="error-text">
                            Last Name must not be empty.
                        </p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    value={emailInputValue}
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                />
                {emailError && (
                    <p className="error-text">Please provide a valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
