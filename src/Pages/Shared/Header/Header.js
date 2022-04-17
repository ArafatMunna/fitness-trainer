import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
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
                <Navbar.Brand as={Link} to="/">
                    Fitness Trainer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/blog">
                            Blog
                        </Nav.Link>
                        <Nav.Link as={CustomLink} to="/about">
                            About
                        </Nav.Link>
                        {user ? (
                            <button
                                className="btn bnt-link text-white text-decoration-none"
                                onClick={handleSignOut}
                            >
                                Logout
                            </button>
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

export default Header;
