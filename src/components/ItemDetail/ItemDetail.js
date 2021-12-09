import React from 'react';


const ItemDetail = ({item, setItem}) => {

    return (
        <div>
            <img alt={item.name} src={item.pictures[0].url}/>
            <div>
                <p>{item.name}</p>
                <p>$ {item.buy_box_winner.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail;
