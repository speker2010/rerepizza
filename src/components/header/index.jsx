import React from 'react';
import styles from './styles.scss';
import CartButton from '../cart-button/index.jsx';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (<header className={styles.header}>
        <div className={`${styles.content} container`}>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <CartButton />
        </div>
    </header>);
}