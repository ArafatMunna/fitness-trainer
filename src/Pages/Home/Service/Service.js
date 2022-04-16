import React from "react";

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 g-5">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h5>${price}</h5>
                    <button className="btn btn-secondary">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
