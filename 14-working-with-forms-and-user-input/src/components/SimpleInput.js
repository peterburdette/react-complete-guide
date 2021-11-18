import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log("Name Input is valid!");
        }
    }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);

        // basic validation
        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        // sets state to true when form is submitted because all inputs are 'touched' aka confirmed by the user
        setEnteredNameTouched(true);

        // basic validation
        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);

        console.log("useState ", enteredName);

        const enteredValue = nameInputRef.current.value;
        console.log("useRef ", enteredValue);

        // reset the form
        setEnteredName("");
        // nameInputRef.current.value = ''; // works but not ideal, this will directly manipulate the DOM
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
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
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
