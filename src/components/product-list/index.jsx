import styles from './index.scss';
import React from 'react';

export default function ProductList (props) {
    return (<div className={styles.productList}>{props.children}</div>);
}