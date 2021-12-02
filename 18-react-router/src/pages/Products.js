import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>
                    <Link to="/products/product-detail">A Book</Link>
                </li>
                <li>A Carpet</li>
                <li>An Online Course</li>
            </ul>
        </section>
    );
};

export default Products;
