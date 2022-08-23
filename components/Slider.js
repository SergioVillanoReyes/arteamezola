import React from "react";
import Link from "next/link";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Button from "./Button";

    const images = [
        "/img/slide/1.jpg",
        "/img/slide/2.jpg",
        "/img/slide/3.jpg",
        "/img/slide/4.jpg",
    ];

const SliderCom = () => {

    return (
        <div className="slider">
            <div className="container-slider">
                <div className="box-slider">
                        <div className="social">
                        <img src="/img/f.png" alt="facebook" className="social-icons w15 m1" />
                        <img src="/img/i.png" alt="facebook" className="social-icons w15 m1" />
                        </div>
                    <div className="left">
                    <Link href="/galeria">
                        <a>
                    <Button styles={{marginRight: '1rem'}} type="primary" title="Ir a Galería" />
                        </a>
                    </Link>
                    </div>
                    <Slide responsive arrows={false} canSwipe>
                    {images.map( (i, index) => (
                        <div key={index} className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${i})` }} />
                        </div>
                    ))}
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default SliderCom;