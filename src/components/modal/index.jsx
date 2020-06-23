import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

const modalRoot = document.getElementById('modal-portal');

export default class Modal extends React.Component{  
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        let component = (this.props.isOpen && <div className={styles.overlay}>
             <div className={styles.modal}>
                 <button className={styles.closeButton} onClick={this.props.onClose}>x</button>
                 {this.props.children}
             </div>
        </div>);
        return ReactDOM.createPortal(component, this.el)
    }
}