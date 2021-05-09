import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

// import styled, {css} from 'styled-components/macro'

// import { menuData } from '../data/MenuData'
// import { Button } from './Button'
import {GiHamburgerMenu} from 'react-icons/gi'
// import BunnyTeaLogo from '../img/bunny-tea-logo-sm.svg'
// import BunnyTeaTitle from '../img/bunny-tea-title-sm.svg'
import {HiMenuAlt1} from 'react-icons/hi';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 70px;
    margin-top: -70px;
    display: flex;
    font-size: 1rem;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 40px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled(HiMenuAlt1)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 2.2rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-item: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 40px;
`

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px){
        display: none;
    }

`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer:
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

// const NavLink = css`
//     color: #fff;
//     display: flex;
//     align-items: center;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;
//     text-decoration: none;
    
// `

// const CompanyLogo = styled.i`
//     display: flex;
//     align-items: center;
//     height: 40px;
//     width: 50px;
//     background-image: url(${BunnyTeaLogo});
//     background-repeat: no-repeat;
// `
// // const CompanyTitle = styled.i`
// //     display: flex;
// //     align-items: center;
// //     width: 450px;
// //     background-image: url(${BunnyTeaTitle});
// //     background-size: contain;
// //     background-repeat: no-repeat;
// // `

// const CompanyName = styled(Link)`
//     ${NavLink}
//     text-decoration: none;
//     font-style: italic;
// `

// //Shift+Alt+Arrow
// const MenuBar = styled(HiMenuAlt1)`
//     display: none;

//     @media screen and (max-width: 768px) {
//         display: block;
//         height: 40px;
//         width: 40px;
//         cursor: pointer;
//         position: absolute;
//         top: 0;
//         right: 0;
//         transform: translate(-50%, 25%);
//     }
// `

// const NavMenu = styled.div`
//     display: flex;
//     align-items: center;
//     margin-right: -48px;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
    
// `

// const NavMenuLink = styled(Link)`
//     ${NavLink}
// `
// const NavBtn = styled.div`
//     display: flex;
//     align-item: center;
//     margin-right: 24px;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
    
// `
// const NavBarContainer = styled.div`

// `
