import React from 'react';
import styles from './styles.scss';
import CartButton from '../cart-button/index.jsx';

export default function Header(props) {
    return (<header className={styles.header}>
        <div className={`${styles.content} container`}>
            <nav>
                <a href="">item 1</a>
                <a href="">item 2</a>
            </nav>
            <CartButton />
        </div>
    </header>);
}