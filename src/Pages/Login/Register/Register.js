import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Register = () => {
    const [error, setError] = useState("");

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        } else {
            setError("Password didn't match");
        }
    };

    return (
        <div
            className="container w-50 mx-auto mt-5"
            style={{ height: "100vh" }}
        >
            <h2 className="text-secondary text-center">Please Login</h2>
            <Form onClick={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword"
                >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                    />
                </Form.Group>
                <p className="text-danger">{error}</p>
                <Button
                    variant="secondary w-50 mx-auto d-block mb-2"
                    type="submit"
                >
                    Register
                </Button>
            </Form>
            <p className="text-center mt-3">
                <Link className="text-decoration-none" to="/login">
                    Already have an account? Login
                </Link>
            </p>
        </div>
    );
};

export default Register;
