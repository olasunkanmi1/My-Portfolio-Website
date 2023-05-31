import React from 'react';
import { ModalStyled } from './Styled';
import check from "../../assets/success.png";
import { ReactComponent as Close } from "../../assets/icons/cancel.svg";

const Modal = ({ modal, setModal }) => {
    return (
        <>
            { modal && (
                <ModalStyled>
                    <div className="wrap">
                        <div className="close" onClick={() => setModal(false)}> <Close /> </div>

                        <img src={check} alt="successful" />
                        <h2>Thank You For Your Submission!</h2>
                        <p>I will get back to you as soon as possible.</p>
                    </div> 
                </ModalStyled>)
            }
        </>
    )
}

export default Modal
