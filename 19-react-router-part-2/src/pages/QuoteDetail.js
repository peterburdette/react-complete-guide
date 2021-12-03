import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return "No quote found.";
    }

    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path="/quotes/:quoteId/comments">
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;