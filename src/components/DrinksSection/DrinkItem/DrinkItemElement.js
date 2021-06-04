import styled from 'styled-components'
import { Link } from "react-router-dom";
export const DrinkWrapper = styled.div`

    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
`

export const TitleDescWrapper = styled.div`

`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    order: 1;
    margin-bottom: 30px;
    height: 50%;
    justify-content: space-around;
`

export const Title = styled.h1`
    color: black;
    font-family: 'Raleway', san-serif;
    font-weight: 600;
    font-size: 40px;
    width: 50%;
    margin: 0 auto;
    padding-bottom: 20px;
    border-bottom: 1px solid black;
    text-align: center;
    text-transform: uppercase;
    
    @media (max-width: 1200px){
        width: 80%;
    }

    @media (max-width: 368px){
        font-weight: 600;
    }
`

export const DescriptionTitle = styled.h2`
    color: black;
    font-family: 'Raleway', san-serif;
    font-weight: 600;
    color: grey;
    font-size: 22px;
    text-align: center;
    margin-top: 60px;
    text-transform: uppercase;

    @media (max-width: 368px){
        font-weight: 600;
    }
`

export const ButtonWrapper = styled.nav`
    cursor: pointer;
    display: flex;
    order: 3;
    width: 100%;
    text-transform: uppercase;
    margin-top: 50px;

    @media (max-width: 768px){
        margin-top: 40px;
    }
`

export const Description = styled.div`
    color: black;
    font-family: 'Raleway', san-serif;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    // text-transform: uppercase;
`
export const Button = styled(Link)`
    border: 2px solid black;
    text-decoration: none;
    text-align: center;
    color: black;
    margin: 0 auto;
    width: 200px;
    padding: 20px 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #000;
        color: white;
    }

    @media (max-width: 480px){
        width: 50vw;
    }
`

export const ImgWrapper = styled.div`
    // outline: 1px solid red;
    display: flex;
    flex-basis: 300px;
    justify-content: center;
    order: 2;

    @media (max-width: 480px){
        flex-basis: 250px;
    }
`
export const Img = styled.img`
    object-fit: cover;
    // flex-shrink: 0;
    width: 500px;
    
    // pointer-events: none;
    // // outline: 1px solid red;
    // -webkit-user-select: none;
    

    @media (max-width: 768px){
        width: 80vw;
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