import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    console.log("APP RUNNING");

    // Use Callback is a hook that allows us to basically store a function across component executions. So it allows us to tell React that we wanna save a function and that this function should not be recreated with every execution.
    const toggleParagraphHandler = useCallback(() => {
        setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }, []);

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={false} />
            <Button
                // type={}
                // className={}
                onClick={toggleParagraphHandler}
                // disabled={}
            >
                Toggle Paragraph
            </Button>
        </div>
    );
}

export default App;
