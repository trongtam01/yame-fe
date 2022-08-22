import React, { useEffect } from 'react'
import FruildData from './FruildData'
import { aos } from '../../utils'

interface Fruild {

}

const Fruild: React.FC<Fruild> = (props) => {

    useEffect(() => {
        aos()
    })

    return (
        <section className="fruild" data-aos="zoom-in">
            {
                FruildData.map((item, index) => (
                    <div key={index} className="fruild__item px-0">
                        <a href={item.path} className="fruild__item__link">
                            <img src={item.img} alt="" />
                        </a>
                    </div>
                ))
            }
        </section>
    )
}

export default Fruild