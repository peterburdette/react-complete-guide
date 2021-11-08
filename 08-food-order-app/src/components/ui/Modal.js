import React from "react";
import ReactDOM from "react-dom";
import styles from "../ui/Modal.module.css";

const Backdrop = (props) => {
    console.log(props);
    return <div className={styles.backdrop} onClick={props.onCloseModal}></div>;
};

const ModalOverLay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    const portalElement = document.getElementById("overlays");
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onCloseModal={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverLay>{props.children}</ModalOverLay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
