import React, {useState} from 'react'
import SideBar from '../components/Sidebar/Sidebar';
import NavBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { aboutSection, menuSection, locationSection, contactSection} from '../components/InfoSection/data';
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
            <HeroSection/>
            <InfoSection {...aboutSection}/>
            {/* <Services /> */}
            {/* <InfoSection {...menuSection}/> */}
            <InfoSection {...locationSection}/>
            <InfoSection {...contactSection}/>
            <Footer/>
        </>
    )
}

export default Home
