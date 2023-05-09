
import React from "react";
import Example from "../../elements/LoginModal";
import {nav} from 'bootstrap';
import Image from "../../../assets/img/Image";
import BackToTopBtn from "../../buttons/BackToTopBtn";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-custom">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <span className="animated-logo"><img src={Image.Logo} alt="/"/> Grandmom's Thandir</span>
                    </a>
                    <button className="navbar-toggler custom-nav-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#menu">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#review">Review</a>
                            </li>
                        </ul>
                        <div className="loginBtn d-flex justify-content-center">
                            <Example/>
                        </div>
                    </div>
                </div>

            </nav>
            <BackToTopBtn />

        </>
    )
}

export default Header;
