import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import Header from './components/header/index.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Cart from './routes/Cart.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';




function App() {
    let [basket, setBasket] = useState({});
    console.log(basket);

    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    ); 
}

ReactDom.render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>,
    document.querySelector('#root'),
);
