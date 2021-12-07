import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>The Welcome Page</h1>
            <Link to="new-user">New User</Link>
            {/* Outlet is a placeholder that tells react router where the nested content should be inserted */}
            <Outlet />
        </section>
    );
};

export default Welcome;
