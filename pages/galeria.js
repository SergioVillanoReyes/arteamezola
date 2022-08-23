/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import Layout from "../components/layout";

const Gallery = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [zoom, setZoom] = useState('');
    console.log({currentSection});
    const sections = [
        'Croquis blanco/negro',
        'Lápiz blanco/negro',
        'Croquis color',
        'Lápiz color',
        'Color total',
        'Viñetas',
        'Artísticos',
        'Personales',
        'Exterior Digital',
        'Interior Digital',
        'Maquetas',
    ];

    const images = [
        [
            1,2,3,4,5,6,7,8,9,10,11
        ],
    ];

    return (
        <Layout>
        <div className="slider">
            <div className="container-slider h15">
                <div className="rowToColumn w80 m-auto">
                    <div className="m2 w60" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="center">
                <p className="title uppercase">Galería</p>
            </div>
        </div>
        <div className="container">
            <div className="gallery-sections">
                {sections.map((x, index) => (
                    <p key={index} className={`text-gallery ${currentSection === index && 'border'}`} onClick={() => setCurrentSection(index)}>{x}</p>
                ))}
            </div>
        </div>
        <div className="container p5-0">
            <div className="container-gallery p5-0">
                {images.map((section, index) => (
                    <div className="box-img" key={index}>
                    {section.map((i) => (
                            <div 
                            key={i} 
                            className="br15 w100 img" 
                            style={{backgroundImage: `url("/img/gallery/${currentSection}/${i}.jpg")`}}
                            onClick={() => setZoom(`url("/img/gallery/${currentSection}/${i}.jpg")`)} 
                            />
                    ))}
                    </div>
                ))}
            </div>
        </div>
        {zoom !== '' && (
        <div className="img-zoom">
            <div className="close" onClick={() => setZoom('')}/>
            <div className="img" style={{backgroundImage: zoom}} />
        </div>
        )}
        </Layout>
    );
};

export default Gallery;