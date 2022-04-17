import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    const navigate = useNavigate();
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 gx-5 gy-3">
            <div className="card shadow-sm">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h5>${price}</h5>
                    <button
                        onClick={() => navigate("/checkout")}
                        className="btn btn-secondary"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;
