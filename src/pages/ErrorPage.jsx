import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen">
            <div className="flex justify-center items-center">
                <h1 className="text-5xl font-bold text-center">OPPS</h1>
                <h1 className="text-5xl font-bold text-center">Page Not Found</h1>
                <Link to='/' className="btn btn-primary">Go Back</Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;