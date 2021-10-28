import React from "react";

const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.title}</label>
            <input
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                ref={props.reference}
            />
        </div>
    );
};

export default Input;
