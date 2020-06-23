import React from 'react';
import CartItem from '../components/cart-item/index.jsx';
import { connect } from 'react-redux';
import { getBasket } from '../redux/selectors';

function Cart (props) {
    let products = Object.getOwnPropertyNames(props.basket).map(key => <CartItem item={props.basket[key]} key={key} />);
    return (
        <div>
            {products}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        basket: getBasket(state)
    }
}

export default connect(mapStateToProps)(Cart);