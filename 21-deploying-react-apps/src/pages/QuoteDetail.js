import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const { quoteId } = params; // object destructuring to pull the quoteId out of the params obj

    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
    } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />;
            </div>
        );
    }

    if (status === "error") {
        return <p className="centered">{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p>No quote found.</p>;
    }

    return (
        <section>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />

            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;