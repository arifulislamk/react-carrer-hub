import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Ooops!</h2>
            <Link to="/"> Go back Home</Link>

        </div>
    );
};

export default ErrorPage;