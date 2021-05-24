import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { MenuItems } from './MenuItems';
import {NavMenu, NavItem} from '../Navbar/NavbarElements';
import './DropDown.css';
const DropDown = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <ul
                onClick = {handleClick} 
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a className={item.cName} href={item.path} onClick={() => setClick(false)}>
                            {item.title}
                            {/* <img 
                            src={item.icon}
                            style={{width: '90px', height: 'auto'}}
                            alt = {item.title}/> */}
                        </a>
                    </li>
                )  
            })}
            </ul>
        </>
    )
}

export default DropDown
