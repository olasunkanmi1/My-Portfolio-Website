import React, { useRef } from 'react';
import { ModalStyled } from './Styled';
import success from "../../assets/success.png";

const Modal = ({ success, setSuccess }) => {
    const modalRef = useRef();
    
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setSuccess(false);
        }
    };

    return (
        <>
            { success && (
                <ModalStyled ref={modalRef} onClick={closeModal}>
                    <div className="wrap">
                        <div className="close" onClick={() => setSuccess(!setSuccess)}>close</div>
                        <img src={success} alt="success" />
                        <h2>Thank You For Your Submission!</h2>
                        <p>I will get back to you as soon as possible.</p>
                    </div> 
                </ModalStyled>)
            }
        </>
    )
}

export default Modal
