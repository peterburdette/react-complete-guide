import React, { useState } from "react";

// 'validateValue' function will get passed into the useInput hook
const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    // if the enteredName is not empty return true and store inside of enteredNameIsValid
    const valueIsValid = validateValue(enteredValue);
    // checks to see if the enteredNameIsValid is invalid and checks to see if the enteredNameTouched is false
    const hasError = !valueIsValid && isTouched;

    // handles onChange - whenever a user types in the field
    const valueChangeHandler = (event) => {
        console.log("onChange");
        setEnteredValue(event.target.value);
    };

    // handles onBlur - whenever a user clicks out of the field
    const inputBlurHandler = (event) => {
        console.log("onBlur");
        setIsTouched(true);
    };

    // resets the states after a successful form submission
    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    };

    // exposes different properties and functions
    return {
        value: enteredValue,
        hasError: hasError,
        isValid: valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
