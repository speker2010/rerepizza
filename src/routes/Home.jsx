import React from 'react';
import ProductList from '../components/product-list/index.jsx';
import ProductItem from '../components/product-item/index.jsx';
import { getProducts, getBasket } from '../redux/selectors';
import { connect } from 'react-redux';

function Home (props) {
    let basket = props.basket;
    console.log(props);
    let productsList = props.products.map((item) => {
        let count = 0;
        if (basket[item.id]) {
            count = basket[item.id].count;
        }
        
        return <ProductItem
            item={item}
            key={item.id}
            count={count}
        />
    });

    return (
        <div className="container">
            <ProductList>
                {productsList}
            </ProductList>
        </div>
    );
}

function stateToProps (state) {
    return {
        products: getProducts(state),
        basket: getBasket(state)
    };
}

export default connect(
    stateToProps,
)(Home);