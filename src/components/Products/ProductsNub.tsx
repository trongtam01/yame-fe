import React from 'react'
import giay from '../../assets/img/giay.jpg'
import giay1 from '../../assets/img/giay1.jpg'
import giay2 from '../../assets/img/giay2.jpg'
import giay3 from '../../assets/img/giay3.jpg'

interface ProductsNub {

}

const ProductsNub: React.FC<ProductsNub> = (props) => {
    return (
        <section className="products__nub">
            <div className="row">
                <div className="col l-3 m-3 c-3">
                    <div className="products__nub__img">
                        <a href="#" className="products__nub__img__link">
                            <img src={giay} alt="" />
                        </a>
                    </div>
                    <div className="products__nub__price">
                        297
                    </div>
                </div>
                 <div className="col l-3 m-3 c-3">
                    <div className="products__nub__img">
                        <a href="#" className="products__nub__img__link">
                            <img src={giay1} alt="" />
                        </a>
                    </div>
                    <div className="products__nub__price">
                        297
                    </div>
                </div>
                 <div className="col l-3 m-3 c-3">
                    <div className="products__nub__img">
                        <a href="#" className="products__nub__img__link">
                            <img src={giay2} alt="" />
                        </a>
                    </div>
                    <div className="products__nub__price">
                        297
                    </div>
                </div>
                 <div className="col l-3 m-3 c-3">
                    <div className="products__nub__img">
                        <a href="#" className="products__nub__img__link">
                            <img src={giay3} alt="" />
                        </a>
                    </div>
                    <div className="products__nub__price">
                        297
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsNub