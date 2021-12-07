import { Link, Route, Routes } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>The Welcome Page</h1>
            <Link to="new-user">New User</Link>
            <Routes>
                {/* this route path is relative to the parent route */}
                <Route path="new-user" element={<p>Welcome, new user!</p>} />
            </Routes>
        </section>
    );
};

export default Welcome;
