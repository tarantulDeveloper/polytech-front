import React from 'react';
import './Slider.css';
import {Carousel} from "react-bootstrap";

const Slider = () => {
    return (

        <Carousel>
            <Carousel.Item className="custom-carousel">
                <img
                    className="d-block w-100"
                    src="https://1.vikiplatform.com/c/1820c/City-Hunter_780x436.jpg?x=b"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="custom-carousel">
                <img
                    className="w-100"
                    src="https://asianwiki.com/images/4/48/The_Heirs_-_Korean_Drama-p1.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="custom-carousel">
                <img
                    className="w-100"
                    src="https://1.vikiplatform.com/c/50c/Boys-Over-Flowers_780x436.jpg?x=b"
                    alt="Third slide"

                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="custom-carousel">
                <img
                    className="w-100"
                    src="https://m.media-amazon.com/images/M/MV5BN2FmMTEyMzAtMGI4Mi00M2IzLTkzNzgtZDRlMTA5NTk0YjIzXkEyXkFqcGdeQXVyMjMxNTAxNDk@._V1_.jpg"
                    alt="Third slide"

                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>

    );
};

export default Slider;