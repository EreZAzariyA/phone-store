import CartItemDetailsModel from "Models/Cart-Item-Details-Model";
import { numberWithCommas } from "index";
import "./InCartCard.css";

interface InCartCardProps {
    phoneInCart: CartItemDetailsModel;
}

function InCartCard(props: InCartCardProps): JSX.Element {



    return (
        <div className="InCartCard">
            <div className="container-fluid">

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
