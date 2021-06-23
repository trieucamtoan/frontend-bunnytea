import React from 'react'
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SidebarMenu,
    SideBarLink,
    SideBtnWrap,
} from './SidebarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    <SideBarLink 
                        to='top-drinks' 
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        offset={-80}
                    >Menu
                    </SideBarLink>
                    <SideBarLink 
                        to='location' 
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                        offset={-80}
                    > Location</SideBarLink>
                    <SideBarLink 
                    to='contact' 
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true'
                    offset={-80}
                    > Contact</SideBarLink>
                    {/* <SideBarRoute to = "/menu" onClick = {toggle}>Order</SideBarRoute> */}
                    
                </SidebarMenu>
                
                <SideBtnWrap>
                    
                </SideBtnWrap>

                {/* <a 
                        href={"https://www.doordash.com/business/274546/?utm_source=partner-link&utm_medium=website&utm_campaign=274546&utm_content=white-m"}
                        target="_blank" 
                        alt="Order Food Delivery with DoorDash" 
                        title="Order Food Delivery with DoorDash" 
                        style={{textDecoration: "none"}}>
                            <div style={{
                                position:"relative",
                                width:"209px",
                                height:"45px",
                                margin:"0px auto",
                                backgroundImage:"url(https://cdn.doordash.com/media/button/button_white_m.svg)",
                                color:"transparent"
                            }}>
                                Order Food Delivery with DoorDash
                            </div>
                    </a> */}
                    
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
