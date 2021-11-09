import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log("APP RUNNING");

    // Use Callback is a hook that allows us to basically store a function across component executions. So it allows us to tell React that we wanna save a function and that this function should not be recreated with every execution.
    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]); // So here we would want to add allow toggle as a dependency in our dependency array. And that tells React that we generally want to store that function. But, whenever allow toggle changes and it has a new value, we want to recreate that function and store that new recreated function. And this ensures that we always use the latest allow toggle value inside of that stored function.

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToggleHandler}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
        </div>
    );
}

export default App;
