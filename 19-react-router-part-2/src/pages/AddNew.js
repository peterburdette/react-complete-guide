import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const AddNew = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);

        history.push("/quotes");
    };

    return (
        <section>
            <h1>Add New Quote</h1>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </section>
    );
};

export default AddNew;
