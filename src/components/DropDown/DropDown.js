import React, {useState} from 'react'
import { MenuItems } from './MenuItems';
import ReactGa from 'react-ga';
import './DropDown.css';
const DropDown = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const ClickHandler = event => {
        setClick(false);
        ReactGa.event({
            category: "Order Now Button",
            action: event.target
        })
    }
    return (
        <>
            <ul
                onClick = {handleClick} 
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a className={item.cName} href={item.path} onClick={ClickHandler}>
                            {item.title}
                        </a>
                    </li>
                )  
            })}
            </ul>
        </>
    )
}

export default DropDown
