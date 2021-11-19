import React, { useState } from "react";

const useUserInput = (validate) => {
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validate(inputValue);
    const hasError = !isValid && isTouched;

    const valueChangedHandler = (event) => {
        setInputValue(event.target.value);
    };

    const fieldBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setInputValue("");
        setIsTouched(false);
    };

    return {
        value: inputValue,
        hasError: hasError,
        isValid: isValid,
        valueChangedHandler,
        fieldBlurHandler,
        reset,
    };
};

export default useUserInput;
