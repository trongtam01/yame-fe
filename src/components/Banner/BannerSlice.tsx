import React from 'react'
import banner from '../../assets/img/banner1.jpg'
import banner1 from '../../assets/img/banner3.jpg'

interface BannerSlice {

}

const BannerSlice: React.FC<BannerSlice> = (props) => {
    return (
        <section className="banner__slice">
            <div className="row">
                <div className="col l-6 m-6 c-12">
                    <div className="banner__slice__title">
                        SALE 2/9
                    </div>
                    <div className="banner__slice__img">
                        <a href="#" className="banner__slice__img__link">
                            <img src={banner} alt="" className="w-100"/>
                        </a>
                    </div>
                </div>
                 <div className="col l-6 m-6 c-12">
                    <div className="banner__slice__title">
                        YaMe.vn - GIỚI THIỆU
                    </div>
                    <div className="banner__slice__img">
                        <a href="#" className="banner__slice__img__link">
                            <img src={banner1} alt="" className="w-100"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSlice