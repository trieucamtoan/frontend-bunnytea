import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color: black;

`

export const FooterWrap = styled.div`
    padding: 40px calc((100vw - 1400px) / 2);
    display: flex;
    flex-direction: column;
    // align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    
    // @media screen and (max-width: 600px) {
    //     align-items: center;
    // }
`

export const FooterLinksContainer = styled.div`
    display: flex;
    // justify-content: center;

    @media  screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    padding: 30px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 20vw;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 600px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
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
    flex-direction: row;
    justify-content: start;
    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        padding-left: 40px;
        padding-right: 40px;
    }
`

export const FooterLogo = styled(LinkRouter)`
    width: 60px;
    color: #fff;
    cursor: pointer;

    @media screen and (max-width: 600px){
        margin-bottom: 15px;
        width: 60px;
    }
`

export const FooterTitle = styled(LinkRouter)`
    display: flex;
    justify-self: flex-start;
    padding-left: 40px;
    cursor: pointer;
    width: 200px;
    
    @media screen and (max-width: 600px) {
        padding-left: 0;
        width: 200px;
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

    @media screen and (max-width: 820px){
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

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

