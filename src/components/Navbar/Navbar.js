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
import BunnyTeaLogoTitle from '../../img/bunny-tea-logo-title.png'
import BunnyTeaTitle from '../../img/bunny-tea-title-black.svg'
import { Modal } from '../Modal/Modal';
import {FaCaretDown} from 'react-icons/fa';
import DropDown from '../DropDown/DropDown';
import {
    Nav, 
    NavBarContainer, 
    NavLogoTitleWrapper,
    NavLogo, 
    NavTitle,
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLink,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
import { GlobalStyle } from '../globalStyles';

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
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    } 

    const [dropDown, setDropDown] = useState(false)

    const onMouseEnter = () => {
        setDropDown(true)
    }

    const onMouseLeave = () => {
        setDropDown(false)
    }

    const onClick = () => {
        setDropDown(!dropDown)
    }


    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavBarContainer>
                <NavLogoTitleWrapper>
                    <NavLogo to ="/" onClick={toggleHome}>
                            <img 
                            src={BunnyTeaLogo}
                            // style={{width: '60px'}}
                            alt = "Bunny Logo"/>
                        </NavLogo>
                        <NavTitle to = "/" onClick={toggleHome}>
                                <img src={BunnyTeaTitle} 
                                // style={{width: '400px', height: '80px'}}
                                alt="Bunny Title" />
                        </NavTitle>
                    </NavLogoTitleWrapper>

                    
                <NavMenu>
                    <NavItem 
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <NavBtn>
                            <NavBtnLink>
                                    Order Now
                                    <FaCaretDown style={{paddingLeft: '5px'}}/>
                            </NavBtnLink>
                                    {/* <Modal showModal={showModal} setShowModal={setShowModal}/> */}
                                {dropDown && <DropDown/>} 
                        </NavBtn>
                        
                    </NavItem>
                    
                    <MobileIcon 
                            style={{color: 'black'}} 
                            onClick = {toggle}
                        /> 
                    {/* <NavItem>
                        <NavLink to='menu'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        offset={-70}
                        >MENU</NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink to='location'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        offset={-71}
                        >LOCATION</NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink to='contact'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        // offset={-70}
                        >CONTACT</NavLink>
                    </NavItem> */}
                    
                        {/* <NavBtn >
                            
                                    
                            </NavItem>
                        </NavBtn> */}
                    
                </NavMenu>
                
                
            
            
           </NavBarContainer>
           
           
        </Nav>
        </IconContext.Provider>
    )
}

export default NavBar
