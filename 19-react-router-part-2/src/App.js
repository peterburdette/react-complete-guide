import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";
import AddNew from "./pages/AddNew";

function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
                <Quotes />
            </Route>
            <Route path="/quotes/:quoteId">
                <QuoteDetail />
            </Route>
            <Route path="/add-new">
                <AddNew />
            </Route>
        </Switch>
    );
}

export default App;

// all quotes
// quote detail
// add new quote
