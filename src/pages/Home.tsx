import React, { useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import Fruild from '../components/Fruild/Fruild'
import ProductHeader from '../components/Products/ProductHeader'
import Products from '../components/Products/Products'
import Aos from "aos";
import Slider from '../components/Slider/Slider'
import banner from '../assets/img/banner.jpg'
import banner1 from '../assets/img/banner1.jpg'
import banner2 from '../assets/img/banner3.jpg'
import ProductsNub from '../components/Products/ProductsNub'
import BannerSlice from '../components/Banner/BannerSlice'

interface Home {
    
}

const Home: React.FC<Home> = (props) => {

    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Banner img={banner} />
            <Slider />
            <Fruild />
            <ProductHeader 
                title='Top sản phẩm HOT'
                des='Những sản phẩm thời trang mới nhất/Hot nhất'
            />
            <Products />
            <Banner img={banner1} />
            <Products />
            <Banner img={banner2} />
            <Products />
            <ProductsNub/>
            <ProductHeader 
                title='Các chương trình Khuyến mãi'
                des='Đừng bỏ lỡ các chương trình khuyến mãi Hot tại Yame.vn'
            />
            <BannerSlice />
        </>
    )
}

export default Home