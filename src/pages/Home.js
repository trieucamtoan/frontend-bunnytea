import React, {useState} from 'react'
import SideBar from '../components/Sidebar/Sidebar';
import NavBar from '../components/Navbar/Navbar';
// import HeroSection from '../components/HeroSection';
// import InfoSection from '../components/InfoSection';
import DrinksSection from '../components/DrinksSection';
// import {locationInfo} from '../components/InfoSection/data';
import LocationSection from '../components/LocationSection';
import {LaQuinta} from '../components/LocationSection/data';
// import Services from '../components/Services';

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
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle = {toggle}/>
            <DrinksSection id ='top-drinks' heading="TOP DRINKS" data={topDrinks}/>
            <DrinksSection id = 'fresh-fruit-drinks' heading="FRESH FRUIT DRINKS" data={freshFruitDrinks}/>
            <DrinksSection id = 'milk-tea' heading="MILK TEA" data={milkTea}/>
            <DrinksSection id = 'fresh-milk-drinks' heading="FRESH MILK DRINKS" data={freshMilkDrinks}/>
            <DrinksSection id = 'tea-slushy' heading="TEA SLUSHY" data={teaSlushy}/>
            <DrinksSection id = 'smoothies' heading="SMOOTHIES" data={smoothies}/>
            <DrinksSection id = 'coffee' heading="COFFEE" data={coffee}/>
            {/* <Services /> */}
            <LocationSection id = 'location' {...LaQuinta}/>
            {/* <InfoSection {...locationInfo}/> */}
            <Footer id = 'contact'/>
        </div>
    )
}

export default Home
