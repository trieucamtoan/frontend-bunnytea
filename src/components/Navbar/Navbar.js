//rafce
import React, {useState, useEffect} from 'react'
import {animateScroll as scroll} from 'react-scroll';
import {IconContext} from 'react-icons/lib'
// import styled, {css} from 'styled-components/macro'
// import {Link} from 'react-router-dom'
// import { menuData } from '../data/MenuData'
// import { Button } from './Button'
// import {GiHamburgerMenu} from 'react-icons/gi'
import BunnyTeaLogo from '../../img/bunny-tea-logo-black.svg'
import BunnyTeaTitle from '../../img/bunny-tea-title-black.svg'

import {
    Nav, 
    NavBarContainer, 
    NavLogo, 
    NavTitle,
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

// const Nav = styled.nav`
//     height: 70px;
//     display: flex;
//     justify-content: space-between;
//     padding: 1rem 2rem;
//     z-index: 100;
//     position: fixed;
//     width: 100%;
//     background: red;
// `
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


const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 70){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav = {scrollNav}>
            {/* <CompanyLogo/>
            <MenuBar />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLink to={item.link} key={index}>
                        {item.title}
                    </NavMenuLink>
                ))}
            </NavMenu>
           <NavBtn>
               <Button to = "/contact" primary = 'true'>Contact Us</Button>
           </NavBtn> */}

           <NavBarContainer>
               <NavLogo to ="/" onClick={toggleHome}>
                   <img src={BunnyTeaLogo} alt = "Bunny Logo"/>
               </NavLogo>
               <NavTitle to = "/" onClick={toggleHome}>
                   <img src={BunnyTeaTitle} alt="Bunny Title" />
                   </NavTitle>
               <MobileIcon 
                style={{color: 'black'}} 
                onClick = {toggle}/>
                <NavMenu>
                    {/* <NavItem>
                        <NavLinks 
                        to='home'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        offset={-70}
                        >HOME</NavLinks>
                    </NavItem> */}
                    <NavItem>
                        <NavLinks to='menu'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        offset={-70}
                        >MENU</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='location'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        // offset={-71}
                        >LOCATION</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        // offset={-70}
                        >CONTACT</NavLinks>
                    </NavItem>
                </NavMenu>

                {/* <NavBtn>
                    <NavBtnLink to="menu">Menu</NavBtnLink>
                </NavBtn> */}
               
           </NavBarContainer>
        </Nav>
        </IconContext.Provider>
    )
}

export default NavBar
