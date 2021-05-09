import React from 'react'
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SidebarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRoute
} from './SidebarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    <SideBarLink to ="about" onClick = {toggle}> About</SideBarLink>
                    <SideBarLink to ="location" onClick = {toggle}> Location</SideBarLink>
                    <SideBarLink to ="contact" onClick = {toggle}> Contact</SideBarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBarRoute to = "/menu" onClick = {toggle}>Menu</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
