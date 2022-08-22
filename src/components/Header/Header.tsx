import React, { useRef, useEffect } from 'react';
import logo from '../../assets/img/yame-f-logo-white.png'

const Header = () => {

    const headerRef = useRef<HTMLElement>(null)

    const scrollHandler = (): void => {
        if(headerRef.current) {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => scrollHandler)
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])
    
    return (
        <header className="header" ref={headerRef}>
            <div className="grid wide">
                <div className="header__container">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header__display">
                        <ul className="header__display__items">
                            <li className="header__display__item">
                                <a href="#" className="pr-2">gu tối giản</a>
                            </li>
                            <li className="header__display__item">
                                <a href="#" className="pr-2">gu đơn giản</a>
                                <div className="header__display__item__arrow">
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                            </li>
                            <li className="header__display__item">
                                <a href="#" className="pr-2">gu thiết kế</a>
                                <div className="header__display__item__arrow">
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                            </li>
                            <li className="header__display__item">
                                <a href="#" className="pr-2">gu unisex</a>
                                <div className="header__display__item__arrow">
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                            </li>
                            <li className="header__display__item">
                                <a href="#" className="pr-2">
                                    <i className="fa-solid fa-bars"></i>
                                </a>
                                <div className="header__display__item__arrow">
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="header__right">
                        <div className="header__right__box">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="header__right__box">
                             <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="header__right__box">
                            <i className="fa-solid fa-bag-shopping"></i>   
                            <div className="header__right__box__relaties">0</div>
                        </div> 
                        <div className="header__toggle">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;