import React, { useEffect, useRef } from 'react'
import OwlCarousel from 'react-owl-carousel';
import porduct1 from '../../assets/img/product.jpg'
import porduct2 from '../../assets/img/product1.jpg'
import { aos } from '../../utils'

interface Products {
    
}

const options = {
    loop: true,
    items: 1,
    autoplayTimeout: 1500,
};

const Products: React.FC<Products> = (props) => {

    useEffect(() => {
        $('.products-slide')
        .on('mouseenter mouseleave', function(e) {
            $(this).data('owl.carousel').options.autoplay = e.type === 'mouseenter';
            $(this).trigger('refresh.owl.carousel');
        });
    }, [])

    useEffect(() => {
        aos()
    }, [])

    return (
        <section className="products" data-aos="fade-up">
            <div className="row">
                <div className="col l-3 m-3 c-3">
                    <OwlCarousel 
                        {...options}
                        className='owl-theme owl-theme products-slide owl-loaded owl-drag' 
                    >
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className='owl-item'>
                                    <div className="products__box">
                                        <a href="#" className="products__box__link">
                                            <img src={porduct1} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className='owl-item'>
                                    <div className="products__box">
                                        <a href="#" className="products__box__link">
                                            <img src={porduct2} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </OwlCarousel>
                     <div className="products__price">
                        357
                     </div>
                </div>
                <div className="col l-3 m-3 c-3">
                    <OwlCarousel 
                        {...options}
                        className='owl-theme owl-theme products-slide owl-loaded owl-drag' 
                    >
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className='owl-item'>
                                    <div className="products__box">
                                        <a href="#" className="products__box__link">
                                            <img src={porduct1} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className='owl-item'>
                                    <div className="products__box">
                                        <a href="#" className="products__box__link">
                                            <img src={porduct2} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </OwlCarousel>; 
                     <div className="products__price">
                        357
                     </div>
                </div>
                <div className="col l-3 m-3 c-3">
                    <OwlCarousel 
                        {...options}
                        className='owl-theme owl-theme products-slide owl-loaded owl-drag' 
                    >
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className='owl-item'>
                                    <div className="products__box">
                                        <a href="#" className="products__box__link">
                                            <img src={porduct1} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className='owl-item'>
                                    <div className="products__box">
                                        <a href="#" className="products__box__link">
                                            <img src={porduct2} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </OwlCarousel>; 
                     <div className="products__price">
                        357
                     </div>
                </div>
                <div className="col l-3 m-3 c-3">
                    <OwlCarousel 
                        {...options}
                        className='owl-theme owl-theme products-slide owl-loaded owl-drag' 
                    >
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className='owl-item'>
                                    <div className="products__box">
                                        <a href="#" className="products__box__link">
                                            <img src={porduct1} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className='owl-item'>
                                    <div className="products__box">
                                        <a href="#" className="products__box__link">
                                            <img src={porduct2} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </OwlCarousel>; 
                     <div className="products__price">
                        357
                     </div>
                </div>
            </div>
        </section>
    )
}

export default Products
