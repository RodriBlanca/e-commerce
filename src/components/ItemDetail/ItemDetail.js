import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
            <img alt={item.title} src={item.thumbnail}/>
            <div>
                <p>{item.title}</p>
                <p>$ {item.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail;
