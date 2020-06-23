import styles from './index.scss';
import React from 'react';

export default function Button (props) {
    return (
        <button className={styles.button} onClick={props.onClick}>{props.children}</button>
    );
}