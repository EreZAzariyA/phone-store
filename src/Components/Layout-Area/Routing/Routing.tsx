import Login from "Components/Auth-Area/Login/Login";
import Register from "Components/Auth-Area/Register/Register";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* Main Routing */}
                <Route path="/" element={<HomePage />} />

                {/* Auth Routing */}
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default Routing;



