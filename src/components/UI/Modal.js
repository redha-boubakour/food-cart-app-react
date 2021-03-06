import React from "react";
import reactDom from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <React.Fragment>
            {reactDom.createPortal(
                <Backdrop onHideCart={props.onHideCart} />,
                portalElement
            )}
            {reactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default Modal;
