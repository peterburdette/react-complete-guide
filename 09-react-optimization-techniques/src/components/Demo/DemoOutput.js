import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DEMO OUTPUT RUNNING");
    return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// memo tells React that for the 'DemoOutput' component it should look at the props that the component gets and check the new value for the props and compare it to a previous value for those props and only if the value of the prop changed the component should be re-executed and re-evaluated.
export default React.memo(DemoOutput);
