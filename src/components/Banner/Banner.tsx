import React, { useEffect } from 'react'
import banner from '../../assets/img/banner.jpg'
import { aos } from '../../utils'

interface Banner {
    img: string
}

const Banner: React.FC<Banner> = (props) => {

    useEffect(() => {
        aos()
    })

    return (
        <section className="banner" data-aos="zoom-in">
            <a href="#" className="banner__link">
                <img src={props.img} alt="" />
            </a>
        </section>
    )
}

export default Banner