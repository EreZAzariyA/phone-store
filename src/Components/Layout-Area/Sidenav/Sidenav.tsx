import CartItemDetailsModel from "Models/Cart-Item-Details-Model";
import { PhoneModel } from "Models/Phone-Model";
import { useEffect, useState } from "react";
import { cartStore } from "Redux/Store";
import "./Sidenav.css";

function Sidenav(): JSX.Element {

    const [itemsInCart, setItemsInCart] = useState<CartItemDetailsModel[]>();

    useEffect(() => {
        const itemsInCart = cartStore.getState().itemsInCart;
    }, []);
    
    return (
        <div className="Sidenav">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Shopping-Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
            {}
            </div>
        </div>
    );
}

export default Sidenav;
