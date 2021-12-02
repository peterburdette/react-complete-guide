import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import QuoteDetail from "./pages/QuoteDetail";
import AllQuotes from "./pages/AllQuotes";
import AddNew from "./pages/AddNew";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes" />
                </Route>
                <Route path="/quotes" exact>
                    <AllQuotes />
                </Route>
                <Route path="/quotes/:quoteId">
                    <QuoteDetail />
                </Route>
                <Route path="/add-new">
                    <AddNew />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;

// all quotes
// quote detail
// add new quote
