import React, {useState} from 'react'
import SideBar from '../components/Sidebar/Sidebar';
import NavBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import DrinksSection from '../components/DrinksSection';
import {locationInfo} from '../components/InfoSection/data';
import Services from '../components/Services';
import {
    topDrinks, 
    freshFruitDrinks,
    milkTea,
    freshMilkDrinks,
    teaSlushy,
    smoothies,
    coffee
}  from '../components/DrinksSection/data';
import Footer from '../components/Footer';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle = {toggle}/>
            <DrinksSection heading="TOP DRINKS" data={topDrinks}/>
            <DrinksSection heading="FRESH FRUIT DRINKS" data={freshFruitDrinks}/>
            <DrinksSection heading="MILK TEA" data={milkTea}/>
            <DrinksSection heading="FRESH MILK DRINKS" data={freshMilkDrinks}/>
            <DrinksSection heading="TEA SLUSHY" data={teaSlushy}/>
            <DrinksSection heading="SMOOTHIES" data={smoothies}/>
            <DrinksSection heading="COFFEE" data={coffee}/>
            {/* <Services /> */}
            {/* <InfoSection {...locationInfo}/>
            <Footer/> */}
        </>
    )
}

export default Home
