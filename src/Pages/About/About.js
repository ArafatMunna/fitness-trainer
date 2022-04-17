import React from "react";
import "./about.css";

const About = () => {
    const munna = process.env.PUBLIC_URL + "images/munna.jpg";
    return (
        <div className="container">
            <div className="mx-auto mt-5 text-center about-container">
                <h2 className="text-secondary">About Me</h2>
                <div className="w-50 mx-auto">
                    <img className="img-fluid" src={munna} alt="" />
                </div>
                <h3 className="mt-3">Md. Arafater Rahman Munna</h3>
                <p className="about-text">
                    I want to be a skilled web developer. That's why I worked
                    hard. I have learned HTML, CSS, Bootstrap, Tailwind,
                    JavaScript, React, and Firebase authentication. I am trying
                    to learn more advanced concepts day by day. I spend 8-10
                    hours daily learning and practicing web development.
                    InshaAllah through hard work I can become a skilled web
                    developer.
                </p>
            </div>
        </div>
    );
};

export default About;
