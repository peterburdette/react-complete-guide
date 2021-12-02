import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
    // React router simply goes through your routes top to bottom. And when it finds a match, and keep in mind, that it matches the start of a path, not the entire path. If it finds a match, it will then stop because of switch, not look at the other routes, and rendered that one route for which it did find a match.

    return (
        <div>
            <MainHeader />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/welcome" />
                    </Route>
                    <Route path="/welcome">
                        <Welcome />
                    </Route>
                    <Route path="/products" exact>
                        {/* the 'exact' prop tells the switch to only direct to the page if the entire path is a match */}
                        <Products />
                    </Route>
                    <Route path="/products/:productId">
                        {/* 'productId' is the parameter on the url which will be stored as a property within an object that contains the name of the page from within the ProductDetail component. E.g. - a url within ProductDetail of '/products/a-book' would return a params object with a key value pair of {productId: a-book} */}
                        <ProductDetail />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
