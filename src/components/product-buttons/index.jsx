import Button from "../button/index.jsx";
import React from 'react';

export default function ProductButtons (props) {
    return (<div>
        {props.count > 0 ? <><Button onClick={props.delete}>-</Button> {props.count} <Button onClick={props.add}>+</Button></> : <Button onClick={props.add}>Добавить</Button>} 
    </div>);
}