import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// lazy load implementation - performance improvement
// this will load only certain parts of all of the code when it is needed
const AddNew = React.lazy(() => import("./pages/AddNew"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const NotFound = React.lazy(() => import("./pages/AllQuotes"));

function App() {
    return (
        <Layout>
            <Suspense
                fallback={
                    <div className="centered">
                        <LoadingSpinner />
                    </div>
                }
            >
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
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Suspense>
        </Layout>
    );
}

export default App;

// all quotes
// quote detail
// add new quote
