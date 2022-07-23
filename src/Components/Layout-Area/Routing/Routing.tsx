import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default Routing;
