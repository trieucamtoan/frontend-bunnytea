import React, {useState} from 'react'
import SideBar from '../components/Sidebar/Sidebar';
import NavBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import DrinksSection from '../components/DrinksSection';
import { homeSection, menuSection, locationSection, contactSection} from '../components/InfoSection/data';
import Services from '../components/Services';
import Footer from '../components/Footer';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen = {isOpen} toggle = {toggle}/>
            <NavBar toggle = {toggle}/>
            <DrinksSection/>
            {/* <HeroSection/> */}
            {/* <InfoSection {...homeSection}/> */}
            <InfoSection {...menuSection}/>
            {/* <Services /> */}
            
            <InfoSection {...locationSection}/>
            <InfoSection {...contactSection}/>
            <Footer/>
        </>
    )
}

export default Home
