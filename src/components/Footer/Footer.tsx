import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import logo from '../../assets/img/yame-f-logo-white.png'
import thongbao from '../../assets/img/dathongbao.png'

interface Footer {

}

const options = {
    loop: true,
    items: 4,
    dots: false,
    autoplay: false,
    responsive: {
        0 : {
            items: 1,
        },
        600:{
            items:3,
        },
        1024:{
            items:4,
        },
    }
};

const Footer: React.FC<Footer> = (props) => {
    return (
        <footer className="footer">
            <div className="footer__header">
                <img src={logo} alt="" />
                <h4>Đặt hàng và thu tiền tận nơi toàn quốc</h4>
                <p>(028) 7307 1441</p>
                <div>Than phiền/Góp ý</div>
                <a href="#" className="footer__header__link">
                    <span>Xem thêm thông tin Yame</span>
                    <i className="fa-solid fa-angle-down"></i>
                </a>
            </div>
            <div className="footer__mid">
                <div className="grid wide">
                    <OwlCarousel 
                        {...options}
                        className='owl-theme owl-theme products-slide owl-loaded owl-drag' 
                    >
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className='owl-item'>
                                    <div className="footer__mid__box">
                                        <div className="footer__mid__header">
                                                <i className="fa-solid fa-signs-post"></i>
                                                <span>Tây Nam Bộ</span>
                                        </div>
                                        <div className="footer__mid__list">
                                            <p className="footer__mid__list__item">
                                                <i className="fa-solid fa-shirt"></i>
                                                <span>YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='owl-item'>
                                    <div className="footer__mid__box">
                                        <div className="footer__mid__header">
                                                <i className="fa-solid fa-signs-post"></i>
                                                <span>Tây Nam Bộ</span>
                                        </div>
                                        <div className="footer__mid__list">
                                            <p className="footer__mid__list__item">
                                                <i className="fa-solid fa-shirt"></i>
                                                <span>YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                 <div className='owl-item'>
                                    <div className="footer__mid__box">
                                        <div className="footer__mid__header">
                                                <i className="fa-solid fa-signs-post"></i>
                                                <span>Tây Nam Bộ</span>
                                        </div>
                                        <div className="footer__mid__list">
                                            <p className="footer__mid__list__item">
                                                <i className="fa-solid fa-shirt"></i>
                                                <span>YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                 <div className='owl-item'>
                                    <div className="footer__mid__box">
                                        <div className="footer__mid__header">
                                                <i className="fa-solid fa-signs-post"></i>
                                                <span>Tây Nam Bộ</span>
                                        </div>
                                        <div className="footer__mid__list">
                                            <p className="footer__mid__list__item">
                                                <i className="fa-solid fa-shirt"></i>
                                                <span>YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </OwlCarousel>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="grid wide">
                    <div className="footer__bottom__box">
                        <div className="footer__bottom__left">
                            <h4>© 2022 - CÔNG TY TNHH YAME VN</h4>
                            <p>Giấy CNĐKDN: 0310874914 – Ngày cấp: 25/11/2011 - Cơ quan cấp: Phòng Đăng Ký Kinh Doanh – Sở Kế Hoạch và Đầu Tư TP.HCM</p>   
                            <p>Địa chỉ đăng ký kinh doanh: 766/3B-3C Sư Vạn Hạnh (Nối dài), Phường 12, Quận 10, TP.HCM - Điện thoại: (028) 3868 4857 - Mua hàng: (028) 7307 1441 - Email: cskh@yame.vn</p>
                        </div>
                        <div className="footer__bottom__right">
                            <img src={thongbao} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer