import React from 'react'

interface ProductHeader {
    title: string;
    des: string;
}

const ProductHeader: React.FC<ProductHeader> = (props) => {

    const { title, des } = props

    return (
        <div className="products__header">
            <h4>{title}</h4>
            <p>{des}</p>
        </div>
    )
}

export default ProductHeader