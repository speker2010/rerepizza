import React from 'react';

export default function CartItem(props) {
    let {title, price, count} = props.item;

    return (<div>
        {title}
        {price * count}
    </div>);
}