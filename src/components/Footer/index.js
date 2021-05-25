import React from 'react'
import {
    FooterContainer,
    FooterLogoTitleWrapper,
    FooterLogo,
    FooterTitle,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterCityTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements'
import {
    FaFacebook, FaInstagram, FaYoutube
} from 'react-icons/fa'

import BunnyTeaWhiteLogo from '../../img/bunny-tea-logo-white.svg'
import BunnyTeaWhiteTitle from '../../img/bunny-tea-title-white.svg'

import {animateScroll as scroll} from 'react-scroll'

const Footer = ({id}) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer id={id}>
            <FooterWrap>
                <FooterLogoTitleWrapper>
                        <FooterLogo to ="/" onClick={toggleHome}>
                                    <img 
                                    src={BunnyTeaWhiteLogo}
                                    style={{width: '60px', height: '60px'}}
                                    alt = "Bunny Logo"/>
                            </FooterLogo>
                        <FooterTitle to = "/" onClick={toggleHome}>
                                <img src={BunnyTeaWhiteTitle} style={{width: '300px'}} alt="Bunny Title" />
                        </FooterTitle>
                </FooterLogoTitleWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>CONTACT</FooterLinkTitle>
                            <FooterLink href="mailto:thebunnytea@gmail.com">thebunnytea@gmail.com</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>LOCATION</FooterLinkTitle>
                            <FooterCityTitle>La Quinta, CA</FooterCityTitle>
                            <FooterLink href="https://goo.gl/maps/Ss65xMWHaJGXRbrh7">79680 Highway 111, La Quinta, CA 92253</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>FOLLOW</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink 
                                href="https://www.facebook.com/The-Bunny-Tea-104448155160574" 
                                target = "_blank" 
                                aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>

                                <SocialIconLink 
                                href="https://www.instagram.com/bunnyteahouse/" 
                                target = "_blank" 
                                aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <WebsiteRights>The Bunny Tea © {new Date().getFullYear()} All rights reserved.</WebsiteRights>

                </FooterLinksContainer>
                    
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
