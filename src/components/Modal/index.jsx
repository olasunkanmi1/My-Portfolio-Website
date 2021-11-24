import React, { useRef } from 'react';
import { ModalStyled } from './Styled';
import check from "../../assets/success.png";
import { ReactComponent as Close } from "../../assets/icons/cancel.svg";
import { ReactComponent as Back } from "../../assets/icons/back.svg";

const Modal = ({ success, setSuccess }) => {
    const modalRef = useRef();
    
    // const closeModal = e => {
    //     if (modalRef.current === e.target) {
    //         setSuccess(false);
    //     }
    // };

    return (
        <>
            { success && (
                <ModalStyled ref={modalRef} >
                    <div className="wrap">
                        {/* <div className="close" onClick={() => setSuccess(!setSuccess)}> <Close /> </div> */}

                        <img src={check} alt="successful" />
                        <h2>Thank You For Your Submission!</h2>
                        <p>I will get back to you as soon as possible.</p>
                        <a href="/"> <Back /> Back to site</a>
                    </div> 
                </ModalStyled>)
            }
        </>
    )
}

export default Modal
