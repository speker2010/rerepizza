import React from 'react';
import styles from './styles.scss';

export default function ProductItem (props) {
    const buttons = props.count === 0 ? 
        <button onClick={props.add}>Добавить</button> 
        : 
        <div><button onClick={props.delete}>-</button> {props.count} <button onClick={props.add}>+</button></div>;
    return (<div className={styles.item}>
        <div className={styles.imageWrapper}>
            <img src={props.img} alt={props.title} className={styles.image}/>
            <div className={styles.info}>i</div>
        </div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.text}>
            {props.text}
        </div>
        <div className={styles.footer}>
            <div className={styles.price}>{props.price} ₽</div>
            <div className={styles.buttons}>
                {buttons}
            </div>
        </div>
    </div>);
}