import { useEffect, useState } from "react";
import { addItemToCartAction } from "Redux/Cart-State";
import { cartStore } from "Redux/Store";
import { PhoneModel } from "../../../Models/Phone-Model";
import "./PhoneCard.css";

interface PhoneCardProps {
    phone: PhoneModel;
}

function PhoneCard(props: PhoneCardProps): JSX.Element {


    const [stock, setStock] = useState<number>(0);

    function addToCart() {
        cartStore.dispatch(addItemToCartAction(props.phone));
    }

    useEffect(() => {
        const itemsInCart = cartStore.getState().itemsInCart;
        // const itemInCart = itemsInCart?.find(i => i.phoneId === i.phoneId);
        // if (itemInCart) {
        //     const addToCartButton = document.getElementById("addToCartBtn" + props.phone.phoneId);
        //     addToCartButton.textContent = "sdfsdf"


        // }



    }, []);


    function plus() {
        setStock(stock + 1);
        
    }
    function minus() {
        if (stock === 0) {
            return;
        }
        setStock(stock - 1);
    }


    return (
        <div className="PhoneCard">
            <div className="card">
                <div id={"carouselExampleControls" + props.phone.phoneId} className="carousel slide col" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={props.phone?.picture} alt="pictureOne" />
                        </div>
                        <div className="carousel-item">
                            <img src={props.phone?.picture} alt="pictureTwo" />
                        </div>
                        <div className="carousel-item">
                            <img src={props.phone?.picture} alt="pictureThree" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleControls" + props.phone.phoneId} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleControls" + props.phone.phoneId} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="card-body">
                    <h5 className="card-title">{props.phone?.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.phone?.price} ₪</h6>
                    <p className="card-text">{props.phone?.description}
                    </p>


                    <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target={"#exampleModal" + props.phone.phoneId}>
                        Add to cart
                    </button>

                    <div className="modal fade" id={"exampleModal" + props.phone.phoneId} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{props.phone.name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p> Set stock to order</p> <br />
                                    <div className="stockToOrder">
                                        <button className="btn" onClick={plus}>+</button>
                                        <p className="stock">{stock}</p>
                                        <button className="btn" onClick={minus}>-</button>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneCard;
