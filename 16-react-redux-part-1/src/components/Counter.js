import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter); // looks at 'counter' property within redux state
    const showCounter = useSelector((state) => state.showCounter); // looks at 'showCounter' property within redux state

    const increaseHandler = () => {
        // dispatch({ type: "increase", amount: 5 });
        dispatch(counterActions.increase(5)); // { type: SOME_UNIQUELY_GENERATED_IDENTIFIER, payload: 5 }
    };

    const incrementHandler = () => {
        // dispatch({ type: "increment" });
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        // dispatch({ type: "decrement" });
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        // dispatch({ type: "toggle" });
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import classes from "./Counter.module.css";

// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }

//     decrementHandler() {
//         this.props.decrement();
//     }

//     toggleCounterHandler() {}

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>
//                         Increment
//                     </button>
//                     <button onClick={this.decrementHandler.bind(this)}>
//                         Decrement
//                     </button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>
//                     Toggle Counter
//                 </button>
//             </main>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({ type: "increment" }),
//         decrement: () => dispatch({ type: "decrement" }),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
