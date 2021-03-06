import Sidenav from "../Sidenav/Sidenav";
import "./Layout.css";
import { FiShoppingCart } from "react-icons/fi";
import Routing from "../Routing/Routing";
import AuthMenu from "Components/Auth-Area/AuthMenu/AuthMenu";
import { NavLink } from "react-router-dom";
import avatar from "../../../Assets/PNGs/avatar.png";

function Layout(): JSX.Element {

    // useEffect(() => {
    //     const phones = phonesServices.getAllPhones();
    //     console.log(phones);

    // }, [])
    return (
        <div className="Layout">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <FiShoppingCart />
                        </button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to={"/"} className="nav-link active" aria-current="page">Home</NavLink>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Pricing</a>
                                <a className="nav-link disabled">Disabled</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <AuthMenu />
                    </div>
                    <div className="avatar dropdown">
                        <a className=" btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            <img src={avatar} alt="" />
                        </a>

                        <ul className="dropdown-menu auth-dropdown dropdown-menu-dark">
                            <AuthMenu />
                        </ul>
                    </div>
                </nav>


                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <Sidenav />
                </div>
            </header>



            <main>
                <Routing />
            </main>



            <footer>
                <p>ErezAzariya</p>
            </footer>

        </div>
    );
}

export default Layout;
