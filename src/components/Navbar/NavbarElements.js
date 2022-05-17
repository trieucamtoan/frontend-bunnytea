import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'
import {BsList} from 'react-icons/bs';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'white' : 'white')};
    height: 80px;
    display: flex;
    position: sticky;
    justify-content: space-between;
    top: 0;
    z-index: 10;
    padding: 0.5rem calc((100vw - 1400px) / 2);

    // @media screen and (max-width: 960px){
    //     transition: 0.8s all ease;
    // }
`

export const NavBarContainer = styled.div`
    font-family: 'Raleway', san-serif;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    // padding: 0 24px;
    // max-width: 85vw;
    
    @media screen and (max-width: 750px) {
        margin: auto 5vw;
    }
    @media screen and (max-width: 290px) {
        margin: auto 2vw;
    }

`
export const NavLogoTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const NavLogo = styled(LinkRouter)`
    margin: 10px 0 0 4vw;
    width: 60px;
    justify-content: center;
    color: #fff;
    cursor: pointer;
`

export const NavTitle = styled(LinkRouter)`
    display: flex;
    justify-self: flex-start;
    padding-left: 40px;
    cursor: pointer;
    with: 300px;
    max-width: 35vw;
    height: 39px;
    @media screen and (max-width: 876px) {
        display: none;
    }
`

export const MobileIcon = styled(BsList)`
    // display: none;

    display: flex;
    // position: fixed;
    top: 0;
    right: 0;
    // transform: translate(-100%, 55%);
    font-size: 3rem;
    cursor: pointer;
    margin-right: 24px;
    
    @media screen and (max-width: 1000px) {
        margin-right: 24px;
    }

    @media screen and (max-width: 600px) {
        margin-right: 0;
    }

    
`

export const NavMenu = styled.ul`
    display: flex;
    align-item: center;
    list-style: none;
    text-align: center;
    margin-right: 24px;

    @media screen and (max-width: 1000px){
        margin-right: 0;
    }

    @media screen and (max-width:433px){
        padding: 0;
        margin: auto 10px;
    }
    
`

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    height: 40px;

    
`

export const NavLink = styled(LinkScroll)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid black;
    }

    // @media screen and (max-width: 1600px){
    //     padding-left: 20px;
    // }
`

export const NavBtn = styled.nav`
    font-size: 22px;
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 1000px){
        font-size: 20px;
    }

    @media screen and (max-width: 750px){
        font-size: 20px;
    }

    @media screen and (max-width: 433px){
        font-size: 4vw;
        margin-right: 10px;
        margin-left: 0;
        
    }

    @media screen and (max-width: 290px){
        // margin-right: 0;
        // margin-left: -55vw;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border: none;
    border-radius: 4px;
    background: black;
    max-width: 40vw;
    padding: 15px 26px;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #535353;
    }

    @media screen and (max-width: 350px){
        padding: 6vw 4vw;
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
