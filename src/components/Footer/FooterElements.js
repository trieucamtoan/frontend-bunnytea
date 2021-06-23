import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color: black;
    width: 100vw;
`

export const FooterWrap = styled.div`
    padding: 40px calc((100vw - 1350px) / 2);
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0 auto;
    
    // @media screen and (max-width: 600px) {
    //     align-items: center;
    // }
`

export const FooterLinksContainer = styled.div`
    display: block;
    
    @media  screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    flex-direction: row;
    margin: 30px;
    justify-content: start;
    flex-direction: row;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    color: #fff;
    padding: 30px;
`

export const FooterLinkTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
`

export const FooterCityTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
`

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    text-decoration: underline;

    &:hover {
        color: #01bbf71;
        transition: 0.3s ease-out;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 20px;
    padding-right: 20px;
`

export const FooterLogoTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 30px;
    margin-top: 100px;
    margin-left: 30px;
    padding: 0 30px;
    // outline: 1px solid yellow;
    // border: 1px solid white;

    @media screen and (max-width: 600px) {
        align-items: start;
        flex-direction: column;
        margin-bottom: 30px;
    }
`

export const FooterLogo = styled(LinkRouter)`
    color: #fff;
    cursor: pointer;
    // outline: 1px solid blue;
`

export const FooterTitle = styled(LinkRouter)`
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    max-width: 300px;
    height: 60px;
    margin-left: 30px;

    @media screen and (max-width: 600px) {
        margin-left: 0;
        margin-top: 10px;
        height: 30px;
        max-width: 60vw;
    }
    
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.div`
    display: flex;
    align-items: center;
    margin: 30px;
    color: #fff;
    padding: 30px;
`

