import { useContext } from "react";
import { AuthContext } from "../Route/AuthProvider";



const Home = () => {

    const {user}= useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <h1>This is Home Section Man!</h1>
        </div>
    );
};

export default Home;