import React from 'react';
import Button from '../button/index.jsx';
import { Route } from 'react-router-dom';
import { connect }  from 'react-redux';
import { getCount } from '../../redux/selectors';

function CartButton(props) {
    
    return (
        <Route render={
            ({history}) =>
                (<Button onClick={() => {history.push('/cart');}}>
                    Корзина {props.count > 0 ? `|${props.count}` : ''}
                </Button>)
        } />
    );
}

function stateToProps(state) {
    return {
        count: getCount(state)
    };
}

export default connect(
    stateToProps
)(CartButton);