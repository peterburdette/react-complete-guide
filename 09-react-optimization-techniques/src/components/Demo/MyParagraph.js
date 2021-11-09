import React from "react";

const MyParagraph = (props) => {
    console.log("MY PARAGRAPH OUTPUT RUNNING");
    return <p>{props.children}</p>;
};

export default MyParagraph;
