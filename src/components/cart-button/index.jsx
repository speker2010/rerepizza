import React from 'react';

export default function CartButton(props) {
    return (
    <button>Корзина {props.count > 0 ? `|${props.count}` : ''}</button>
    );
}