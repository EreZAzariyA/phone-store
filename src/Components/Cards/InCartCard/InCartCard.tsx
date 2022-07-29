import CartItemDetailsModel from "Models/Cart-Item-Details-Model";
import { numberWithCommas } from "index";
import "./InCartCard.css";
import { cartStore } from "Redux/Store";
import { removeItemFromCartAction } from "Redux/Cart-State";

interface InCartCardProps {
    phoneInCart: CartItemDetailsModel;
}

function InCartCard(props: InCartCardProps): JSX.Element {

    function deleteItemFromCart() {
        const ans = window.confirm("Are you sure ?");
        if (ans) {

            cartStore.dispatch(removeItemFromCartAction(props.phoneInCart))
        }
    }



    return (
        <div className="InCartCard">
            <div className="container-fluid">


                <button className="btn deleteBtn" onClick={deleteItemFromCart}>❌</button>
                <div className="row">
                    <div className="col-6">
                        <img src={props.phoneInCart.picture} alt={props.phoneInCart.name} />
                    </div>

                    <div className="col-4">

                        <h6>{props.phoneInCart.name}</h6>
                    </div>

                    <div className="col-2">{numberWithCommas(props.phoneInCart.price * props.phoneInCart.stock)}₪</div>
                </div>

            </div>
        </div>
    );
}

export default InCartCard;
