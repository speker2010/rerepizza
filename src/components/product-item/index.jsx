import React from 'react';
import styles from './styles.scss';
import ProductButtons from '../product-buttons/index.jsx';
import ExtendProductItem from '../extend-product-item/index.jsx';

import { connect } from 'react-redux';

import { addItem, deleteItem } from '../../redux/actions';

function ProductItem (props) {
    let isComplicated = Object.getOwnPropertyNames(props.item)
        .filter(item => ['options', 'extends', 'sizes', 'doughs']
        .indexOf(item) !== -1)
        .length !== 0;
    const add = () => {props.add({id: props.item.id})};
    const del = () => {props.delete(props.item)};
    const buttons = isComplicated ? <ExtendProductItem item={props.item} add={props.add} />: <ProductButtons add={add} delete={del} count={props.count} />;
    
    return (<div className={styles.item}>
        <div className={styles.imageWrapper}>
            <img src={props.item.img} alt={props.item.title} className={styles.image}/>
            <div className={styles.info}>i</div>
        </div>
        <div className={styles.title}>{props.item.title}</div>
        <div className={styles.text}>
            {props.item.text}
        </div>
        <div className={styles.footer}>
            <div className={styles.price}>{props.item.price} ₽</div>
            <div className={styles.buttons}>
                {buttons}
            </div>
        </div>
    </div>);
}

export default connect(null, {
    add: addItem,
    delete: deleteItem
})(ProductItem);