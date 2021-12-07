import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const AddNew = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === "completed") {
            history.push("/quotes");
        }
    }, [status, history]);

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        // POSTs the quoteData using the function sendReqest from the use-http file
        sendRequest(quoteData);
    };

    return (
        <section>
            <h1>Add New Quote</h1>
            <QuoteForm
                isLoading={status === "pending"}
                onAddQuote={addQuoteHandler}
            />
        </section>
    );
};

export default AddNew;
