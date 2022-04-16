import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const form = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, hookError] =
        useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (hookError) {
            setError(hookError.message);
        }
    }, [hookError]);

    useEffect(() => {
        if (user) {
            navigate(form, { replace: true });
        }
    }, [user]);

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
        setError("");
    };

    return (
        <div
            className="container w-50 mx-auto mt-5"
            style={{ height: "100vh" }}
        >
            <h2 className="text-secondary text-center">Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                    />
                </Form.Group>
                <p className="text-danger">{error}</p>
                <Button
                    className="w-50 mx-auto d-block"
                    variant="secondary"
                    type="submit"
                >
                    Login
                </Button>
            </Form>
            <p className="text-center mt-3">
                New to Fitness Trainer?{" "}
                <Link className="text-decoration-none" to="/register">
                    Register
                </Link>
            </p>
            <SocialLogin />
        </div>
    );
};

export default Login;
