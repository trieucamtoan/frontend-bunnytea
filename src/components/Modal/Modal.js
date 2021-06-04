import React, {useRef, useEffect, useCallBack, useState} from 'react'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import { IconContext } from 'react-icons/lib'

const Background = styled.div`
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const ModalWrapper = styled.div`
    display: flex;
    // border-radius: 20px;
    width: 100vw;
    height: 100vh;
    // padding: 5vw;
    // outline: 1px solid yellow;
    // box-shadow: 0 5px 16px rgba (0,0,0,0.8);
    background: #fff;
    color: #000;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    position: relative;
    z-index: 10;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const ModalContent = styled.div`
    color: #141414;
    flex-basis: 50%;
    order: 2;
    width: 80%;
    height: 80vh;
    outline: 1px solid blue;
    align-items: flex-end;
    max-width: 600px;
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

const ModalContentWrapper = styled.div`
    outline: 1px solid blue;
    margin: 10vh auto;
    height: 60%;
`

const HorizontalLineBottom = styled.span`
    border: none; 
    border-bottom: 3px solid gainsboro;
    margin-bottom: 50px;
    width: 65vw;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1628px){
        width: 90vw;
    }
`
const ModalImgWrapper = styled.div`
    outline: 1px solid red;
    display: flex;
    margin: 30px;
    flex-basis: 40%;
    justify-content: center;
    order: 1;
    height: 80vh;
`
const ModalImg = styled.img`
    object-fit: cover;
    // flex-shrink: 0;
    width: 80%;
    
    // pointer-events: none;
    // // outline: 1px solid red;
    // -webkit-user-select: none;
    

    @media (max-width: 550px){
        width: 70vw; 
        height: 75vw;
    }

    // @media (min-width: 1000px){
    //     width: 30vw; 
    //     height: 35vw;
    // }

    // @media (min-width: 1620px){
    //     width: 30vw; 
    //     height: 35vw;
    }
`
const ModalTitle = styled.h1`
    color: black;
    font-family: 'Raleway', san-serif;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 368px){
        font-weight: 600;
    }
`

const ModalDescriptionTitle = styled.h1`
    color: black;
    font-family: 'Raleway', san-serif;
    font-weight: 600;
    color: grey;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 368px){
        font-weight: 600;
    }
`

const ModalDescription = styled.div`
    color: black;
    font-family: 'Raleway', san-serif;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    // text-transform: uppercase;
`
const GoBackModalButtonWrapper = styled.div`
    height: 40%;
`
const GoBackModalButton = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: black;
    align-items: center;    
    font-family: 'Raleway', san-serif;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    border: 2px solid black;
    border-radius: 10px;
    padding: 15px 30px;
    width: 80px;
    
`

const CloseModalButtonWrapper = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 2.0rem;
    background: transparent;
    font-size: 3rem;
    cursor: pointer;
    outline: none;
`

const CloseModalButton = styled(MdClose)`
    
`

export const Modal = ({showModal, setShowModal, product}) => {
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
    })
    return (
        <>
        {showModal ? 
            <Background>
                <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                        <ModalContentWrapper>
                            <ModalTitle>{product.name}</ModalTitle>                            
                            <ModalDescriptionTitle>Description</ModalDescriptionTitle>
                            {/* <div>{product.name}</div>
                            <div>{product.modalDesc}</div> */}
                            <ModalDescription>{product.desc}</ModalDescription>
                            <ModalDescription>{product.modalDesc}</ModalDescription>
                        </ModalContentWrapper>
                        <GoBackModalButtonWrapper>
                            <GoBackModalButton onClick={() => setShowModal(prev => !prev)}>Go Back</GoBackModalButton>
                        </GoBackModalButtonWrapper>
                    </ModalContent>
                    <ModalImgWrapper>
                        <ModalImg src={product.img} alt={product.alt}/>
                    </ModalImgWrapper>
                    
                    

                    <CloseModalButtonWrapper aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)}>
                        <CloseModalButton/>
                    </CloseModalButtonWrapper>
                </ModalWrapper>
                </animated.div>
            </Background>
        : null
        }
        </>
    )
}
