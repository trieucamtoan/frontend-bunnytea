import React, {useState} from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

const Background = styled.div`
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 50%;
    height: auto;
    box-shadow: 0 5px 16px rgba (0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    // grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const ModalContent = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`

const CloseModalButton = styled(MdClose)`
    color: rgb(0, 0, 0) !important;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

export const Modal = ({showModal, setShowModal}) => {
    return (
        <>
        {showModal ? 
            <Background>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                        <a 
                            href={"https://www.doordash.com/business/274546/?utm_source=partner-link&utm_medium=website&utm_campaign=274546&utm_content=white-m"}
                            target="_blank" 
                            alt="Order Food Delivery with DoorDash" 
                            title="Order Food Delivery with DoorDash" 
                            style={{textDecoration: "none"}}>
                                <div style={{
                                    position:"relative",
                                    width:"209px",
                                    height:"45px",
                                    margin:"0px auto",
                                    backgroundImage:"url(https://cdn.doordash.com/media/button/button_white_m.svg)",
                                    color:"transparent"
                                }}>
                                    Order Food Delivery with DoorDash
                                </div>
                        </a>
                    </ModalContent>
                    <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)}/>
                </ModalWrapper>
            </Background>
        : null
        }
        </>
    )
}
