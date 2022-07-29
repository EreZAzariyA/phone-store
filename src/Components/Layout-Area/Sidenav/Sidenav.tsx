import InCartCard from "Components/Cards/InCartCard/InCartCard";
import { numberWithCommas } from "index";
import CartItemDetailsModel from "Models/Cart-Item-Details-Model";
import { useEffect, useState } from "react";
import { cartStore } from "Redux/Store";
import "./Sidenav.css";

function Sidenav(): JSX.Element {

    const [itemsInCart, setItemsInCart] = useState<CartItemDetailsModel[]>();
    const [totalPrice, setTotalPrice] = useState<number[]>([]);

    useEffect(() => {
        const itemsInCart = cartStore.getState().itemsInCart;
        setItemsInCart(itemsInCart);


        const unsubscribe = cartStore.subscribe(() => {
            const items = cartStore.getState().itemsInCart;

            setItemsInCart([...items]);
        });


        return () => unsubscribe();
    }, []);





    return (
        <div className="Sidenav">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Shopping-Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">


                {itemsInCart?.map(i => <InCartCard key={i.phoneId} phoneInCart={i}></InCartCard>)}
            </div>

            <div className="offcanvas-footer">
                <div className="totalPrice">
                    <p>Your total price is: {totalPrice}</p>
                    <button className="btn btn-secondary">Make an order</button>
                </div>
            </div>
        </div>
    );
}

export default Sidenav;
