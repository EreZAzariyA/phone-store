import Sidenav from "../Sidenav/Sidenav";
import "./Layout.css";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";
import phonesServices from "../../../Services/PhoneServices";
import Routing from "../Routing/Routing";

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
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Pricing</a>
                                <a className="nav-link disabled">Disabled</a>
                            </div>
                        </div>
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
