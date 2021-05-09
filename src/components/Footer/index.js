import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
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

import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/FAQ">How It Works</FooterLink>
                            <FooterLink to="/FAQ">Testimonials</FooterLink>
                            <FooterLink to="/FAQ">Careers</FooterLink>
                            <FooterLink to="/FAQ">Investors</FooterLink>
                            <FooterLink to="/FAQ">Terms of Services</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/FAQ">Contact</FooterLink>
                            <FooterLink to="/FAQ">Support</FooterLink>
                            <FooterLink to="/FAQ">Destination</FooterLink>
                            <FooterLink to="/FAQ">Sponsorships</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/FAQ">Submit Video</FooterLink>
                            <FooterLink to="/FAQ">Ambassadors</FooterLink>
                            <FooterLink to="/FAQ">Agency</FooterLink>
                            <FooterLink to="/FAQ">Influencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick ={toggleHome}>
                            The Bunny Tea
                        </SocialLogo>
                        <WebsiteRights>
                            The Bunny Tea © {new Date().getFullYear()}  All Rights Reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink 
                            href="//www.facebook.com" 
                            target = "_blank" 
                            aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink 
                            href="//www.instagram.com" 
                            target = "_blank" 
                            aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink 
                            href="//www.youtube.com" 
                            target = "_blank" 
                            aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
