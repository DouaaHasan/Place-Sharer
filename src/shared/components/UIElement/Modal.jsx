import React from 'react';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';
import Backdrop from '../UIElement/Backdrop';

const ModalOverLay = props => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className='modal__header'>
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
        <div className={`modal__content ${props.contentClass} `}>{props.children}</div>
        <footer className={`modal__footer ${props.footerClass}`}>{props.footer}</footer>
      </form>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={oncancel} />}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} className='modal'>
        <ModalOverLay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
