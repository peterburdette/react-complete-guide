import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const AddNew = () => {
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
    };

    return (
        <section>
            <h1>Add New Quote</h1>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </section>
    );
};

export default AddNew;
