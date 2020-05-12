import React, { useState } from 'react';
import ReactDom from 'react-dom';
import ProductItem from './components/product-item/index.jsx';
import './index.scss';
import Header from './components/header/index.jsx';
import CartButton from './components/cart-button/index.jsx';

const img = 'http://placehold.it/292x292/';
const products = [
    {
        id: 'idproduct1',
        title: 'Product 1 title',
        img,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nostrum voluptate non aspernatur, enim quisquam odit, possimus itaque saepe, vero officia? Pariatur perferendis cupiditate consequuntur magnam eaque recusandae facilis laboriosam.',
        price: 100.00
    },
    {
        id: 'idproduct2',
        title: 'Product 2 title',
        img,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nostrum voluptate non aspernatur, enim quisquam odit, possimus itaque saepe, vero officia? Pariatur perferendis cupiditate consequuntur magnam eaque recusandae facilis laboriosam.',
        price: 300.00
    },
    {
        id: 'idproduct3',
        title: 'Product 3 title',
        img,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nostrum voluptate non aspernatur, enim quisquam odit, possimus itaque saepe, vero officia? Pariatur perferendis cupiditate consequuntur magnam eaque recusandae facilis laboriosam.',
        price: 300.00
    },
    {
        id: 'idproduct4',
        title: 'Product 4 title',
        img,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nostrum voluptate non aspernatur, enim quisquam odit, possimus itaque saepe, vero officia? Pariatur perferendis cupiditate consequuntur magnam eaque recusandae facilis laboriosam.',
        price: 250.00
    },
];

function App() {
    let [basket, setBasket] = useState([]);
    let basketButton = <CartButton count={basket.length} />;

    let productsList = products.map((item) => {
        let basketPosition = basket.findIndex((product) => item.id === product.id);
        function addItem() {
            let newBasket;
            if (basketPosition < 0) {
                newBasket = [
                    ...basket,
                    {
                        id: item.id,
                        count: 1
                    }
                ];
            } else {
                basket[basketPosition].count++;
                newBasket = [...basket];
            }
            setBasket(newBasket);
        }
        function deleteItem() {
            if (basketPosition < 0) {
                return;
            }
            basket[basketPosition].count--;
            if (basket[basketPosition].count <= 0) {
                basket.splice(basketPosition, 1);
            }
            setBasket([...basket]);
        }
        return <ProductItem
            img={item.img}
            title={item.title}
            text={item.text}
            price={item.price}
            key={item.id}
            id={item.id}
            add={addItem}
            delete={deleteItem}
            count={basketPosition >= 0 ? basket[basketPosition].count : 0}
        />
    });

    return (<div>
        <Header basket={basketButton} />
        <div className="container">
            {productsList}
        </div>
    </div>);
}

ReactDom.render(
    <div><App/></div>,
    document.querySelector('#root'),
);
