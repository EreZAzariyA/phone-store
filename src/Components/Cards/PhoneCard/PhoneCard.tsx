import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PhoneModel } from "../../../Models/Phone-Model";
import "./PhoneCard.css";

interface PhoneCardProps {
    phone: PhoneModel;
}

function PhoneCard(props: PhoneCardProps): JSX.Element {

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

                    <button className="btn btn-outline-success">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default PhoneCard;
