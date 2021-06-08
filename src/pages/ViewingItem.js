import React, {useState} from 'react'
import SideBar from '../components/Sidebar/Sidebar';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import DrinkItem from '../components/DrinksSection/DrinkItem'
import { useLocation} from "react-router";
const ViewingItem = props => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const {product} = location.state
    console.log(location)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    console.log(product);
    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle = {toggle}/>
            <DrinkItem product={product}/>
            <Footer id = 'contact'/> 
        </div>
    )
    
}

export default ViewingItem
