import React, { ReactNode, useEffect } from 'react'
import OwlCarousel from "react-owl-carousel";
import SliderData from './SliderData'
import { aos } from '../../utils'

interface Slider {
    children?: ReactNode;
}

const Slider: React.FC<Slider> = (props) => {

    useEffect(() => {
        aos()
    }, [])

    const options = {
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
        0 : {
            items:1,
        },
        600:{
            items:1,
        },
        1024:{
            items:2,
        },
    }
    };

    return (
        <section className="slider" data-aos="zoom-in">
            <OwlCarousel className="owl-theme owl-loaded owl-drag" {...options}>
                <div className="owl-stage-outer">
                    <div className="owl-stage">
                        {
                            SliderData.map((item, index) => (
                                <div className="owl-item" key={index}>
                                    <div className="slider__item">
                                        <div className="slider__item__top">
                                            <a href="#" className="slider__item__top__link">
                                                {item.display}
                                            </a>
                                        </div>
                                        <div className="slider__item__mid">
                                            <img src={item.thumb} alt="" />
                                        </div>
                                        <div className="slider__item__bot">
                                            <div className="row">
                                                <div className="col l-3 m-3 c-3">
                                                    <div className="slider__item__bot__list">
                                                        <a href="#" className="slider__item__bot__link">
                                                            <img src={item.products.img1} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col l-3 m-3 c-3">
                                                    <div className="slider__item__bot__list">
                                                        <a href="#" className="slider__item__bot__link">
                                                            <img src={item.products.img2} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col l-3 m-3 c-3">
                                                    <div className="slider__item__bot__list">
                                                        <a href="#" className="slider__item__bot__link">
                                                            <img src={item.products.img3} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col l-3 m-3 c-3">
                                                    <div className="slider__item__bot__list">
                                                        <a href="#" className="slider__item__bot__link">
                                                            <img src={item.products.img4} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>  
            </OwlCarousel>
        </section>
    )
}

export default Slider

