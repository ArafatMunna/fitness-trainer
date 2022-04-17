import React from "react";

const Header = () => {
    const trainer = process.env.PUBLIC_URL + "images/trainer.jpg";
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="mt-5">
                        <div>
                            <h2>Personal Fitness Trainer</h2>
                            <p>
                                People work with personal trainers for many
                                reasons. Whether you want to develop an
                                individualized program to support weight loss
                                goals, get in shape, or simply feel that you'd
                                benefit from the additional accountability or
                                instruction, a personal trainer can be a great
                                resource.
                                <br />
                                If you are just starting out with an exercise
                                program or you aren't seeing results with your
                                current routine, a personal trainer might be
                                your best option.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={trainer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
