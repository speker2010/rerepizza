import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import Header from './components/header/index.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Cart from './routes/Cart.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

function App({ store }) {
    return (
        <Provider store={store}>
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
        </Provider>
    ); 
}

ReactDom.render(
    <div>
        <App store={store}/>
    </div>,
    document.querySelector('#root'),
);
