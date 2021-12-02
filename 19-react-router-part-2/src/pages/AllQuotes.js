import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {
        id: "q1",
        author: "Peter",
        text: "Learning ReactJS is fun!",
    },
    {
        id: "q2",
        author: "Bob",
        text: "The Lord of the Rings is great!",
    },
];

const AllQuotes = () => {
    return (
        <section>
            <h1>All Quotes</h1>
            <QuoteList quotes={DUMMY_QUOTES} />
        </section>
    );
};

export default AllQuotes;
