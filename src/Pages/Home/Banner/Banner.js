import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
    const banner1 = process.env.PUBLIC_URL + "images/banner/banner1.jpg";
    const banner2 = process.env.PUBLIC_URL + "images/banner/banner2.jpg";
    const banner3 = process.env.PUBLIC_URL + "images/banner/banner3.jpg";

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Lifting weights and getting dates.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Train like a beast, look like a beauty.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Believe in yourself and you will be unstoppable.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
