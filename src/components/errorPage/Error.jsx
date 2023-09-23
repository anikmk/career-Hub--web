import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h2>opps sorry data is not found</h2>
            <NavLink to="/"><button>Go Back</button></NavLink>
        </div>
    );
};

export default Error;