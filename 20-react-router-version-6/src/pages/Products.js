import { Link, useNavigate } from "react-router-dom";

const Products = () => {
    // navigate could be used within useEffect or within a handler
    // const navigate = useNavigate();
    // you can pass numbers like '1' to go forward or '-1' to go back
    // navigate(-1);

    // you can navigate progromatically by passing a string
    // navigate('/welcome');

    // you can redirect by passing a second argument as an object with some options
    // navigate('/welcome', {replace: true});

    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>
                    <Link to="/products/p1">A Book</Link>
                </li>
                <li>
                    <Link to="/products/p2">A Carpet</Link>
                </li>
                <li>
                    <Link to="/products/p3">An Online Course</Link>
                </li>
            </ul>
        </section>
    );
};

export default Products;
