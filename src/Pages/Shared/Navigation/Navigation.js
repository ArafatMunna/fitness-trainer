import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Navigation = () => {
    const logo = process.env.PUBLIC_URL + "images/logo2.png";
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="secondary"
            variant="dark"
            sticky="top"
        >
            <Container>
                <Navbar.Brand
                    className="d-flex align-items-center"
                    as={Link}
                    to="/"
                >
                    <img height={40} src={logo} alt="" />
                    Fitness Trainer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={CustomLink} to="/blog">
                            Blog
                        </Nav.Link>
                        <Nav.Link as={CustomLink} to="/about">
                            About
                        </Nav.Link>
                        {user ? (
                            <div>
                                <Nav.Link
                                    className="text-white"
                                    onClick={handleSignOut}
                                >
                                    Logout
                                </Nav.Link>
                            </div>
                        ) : (
                            <Nav.Link as={CustomLink} to="/login">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
