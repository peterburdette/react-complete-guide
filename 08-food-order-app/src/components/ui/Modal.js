import React from "react";
import ReactDOM from "react-dom";
import styles from "../ui/Modal.module.css";

const Backdrop = (props) => {
    return <div className={styles.backdrop}></div>;
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
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverLay>{props.children}</ModalOverLay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
