import React from 'react';
import Modal from "../modal/index.jsx";
import { useState } from "react";
import Button from "../button/index.jsx";
import { addItem } from '../../redux/actions';

import { connect } from 'react-redux';

function ExtendProductItem (props) {
    let [isOpen, setIsOpen] = useState(false);

    function add () {
        setIsOpen(false);
        props.add(props.item);
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>{props.item.title}</h2>
                <Button onClick={add}>Добавить</Button>
            </Modal>
            <Button onClick={() => setIsOpen(true)}>Добавить</Button>
        </>
    );
}

export default connect(null, { add: addItem })(ExtendProductItem);