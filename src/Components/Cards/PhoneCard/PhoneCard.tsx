import CartItemDetailsModel from "Models/Cart-Item-Details-Model";
import { SyntheticEvent, useEffect, useState } from "react";
import { addItemToCartAction } from "Redux/Cart-State";
import { cartStore } from "Redux/Store";
import { PhoneModel } from "../../../Models/Phone-Model";
import "./PhoneCard.css";

interface PhoneCardProps {
    phone: PhoneModel;
}

function PhoneCard(props: PhoneCardProps): JSX.Element {


    const [stock, setStock] = useState<number>(1);
    const [itemInCart, setItemInCart] = useState<CartItemDetailsModel>();

    useEffect(() => {


        const itemsInCart = cartStore.getState().itemsInCart;

        const itemInCart = itemsInCart?.find(i => i.phoneId === props.phone.phoneId);
        setItemInCart(itemInCart)

        if (itemInCart) {
            setStock(itemInCart.stock);
            const addToCartBtn = document.getElementById("addToCartBtn" + props.phone.phoneId);
            (addToCartBtn as HTMLInputElement).value = "in-cart";
            (addToCartBtn as HTMLInputElement).innerHTML = "In-Cart ✅";
            addToCartBtn.classList.add("btn-success");

        } else {
            setStock(1)
        }

        // if (itemInCart) {

        // }

        const unsubscribe = cartStore.subscribe(() => {
            const itemsInCart = cartStore.getState().itemsInCart;

            if (itemsInCart?.find(i => i.phoneId === props.phone.phoneId)) {

                const addToCartBtn = document.getElementById("addToCartBtn" + props.phone.phoneId);
                (addToCartBtn as HTMLInputElement).value = "in-cart";
                (addToCartBtn as HTMLInputElement).innerHTML = "In-Cart ✅";
                addToCartBtn.classList.add("btn-success")



            }

        })

        return () => unsubscribe();

    }, []);

    function numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function plus() {
        setStock(stock + 1)

    }

    function minus() {
        if (stock === 1) {
            return;
        }
        setStock(stock - 1);
    }

    function addToCartBtn(e: SyntheticEvent) {
        const value = (e.target as HTMLInputElement).value;

        console.log(value);

    }

    function saveChanges() {
        const newPhone = new CartItemDetailsModel();
        newPhone.brandId = props.phone.brandId;
        newPhone.description = props.phone.description;
        newPhone.name = props.phone.name;
        newPhone.phoneId = props.phone.phoneId;
        newPhone.picture = props.phone.picture;
        newPhone.price = props.phone.price;
        newPhone.stock = stock;
        cartStore.dispatch(addItemToCartAction(newPhone));
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
                    <h6 className="card-subtitle mb-2 text-muted">{numberWithCommas(props.phone.price)} ₪</h6>
                    <p className="card-text">{props.phone?.description}
                    </p>


                    <button type="button" id={"addToCartBtn" + props.phone.phoneId} className="btn btn-secondary" data-bs-toggle="modal" onClick={addToCartBtn} value={"not-in-cart"} data-bs-target={"#exampleModal" + props.phone.phoneId}>
                        Add to cart
                    </button>

                    <div className="modal fade" id={"exampleModal" + props.phone.phoneId} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Set stock to order</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h3 className="phoneName">
                                        {props.phone.name}
                                    </h3>
                                    <div>
                                        <div className="row">
                                            <div className="col-6">
                                                <img src={props.phone.picture} alt="" />
                                            </div>
                                            <div className="col-6">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet quas eum illo et odit minima veniam, sapiente ab vitae blanditiis velit nisi repellendus accusamus sit totam sed sint molestiae!
                                            </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    {numberWithCommas(props.phone.price * stock)} ₪
                                                </div>
                                                <div className="col-6">

                                                    <div className="stockToOrder col-12">
                                                        <button className="btn" onClick={plus}>+</button>
                                                        <p className="stock">{ stock}</p>
                                                        <button className="btn" onClick={minus}>-</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={saveChanges}>Save changes</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PhoneCard;
