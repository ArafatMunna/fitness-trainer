import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;

        toast("Thank you for the booking");
    };

    return (
        <div className="container w-50 mx-auto mt-5 form-container px-4 pt-5">
            <h2 className="text-secondary text-center mb-4">
                Your Personal Info
            </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={user?.email}
                        readOnly
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your Address"
                        name="address"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        required
                    />
                </Form.Group>
                <Button
                    className="w-50 d-block mx-auto "
                    variant="secondary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;
