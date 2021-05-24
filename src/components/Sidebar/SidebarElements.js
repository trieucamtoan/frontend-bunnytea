import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const SideBarContainer = styled.aside`
    position: fixed;
    // z-index: 999;
    z-index: ${({isOpen}) => (isOpen ? '999' : '-999')};;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
` 

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SideBarWrapper = styled.div`
    color: #fff;
`

export const SideBarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: grey;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SideBarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 2rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const SidebarMenu = styled.ul`
    display: grid;
    margin-left: -30px;
    grid-template-columns: 1fr;
    font-family: 'Raleway', san-serif;
    grid-template-rows: repeat(8, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(5,80px);
    }
`