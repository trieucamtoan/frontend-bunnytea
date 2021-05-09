import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {
    HeroBg, HeroContainer, VideoBg, HeroContent, 
    HeroH1, HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight
} from './HeroSectionElements'
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer id = "home">
                <HeroBg>
                    <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Some sample text</HeroH1>
                    <HeroP>Some sample content</HeroP>
                    <HeroBtnWrapper>
                        <Button to = 'menu' 
                        primary='true'
                        dark='true'
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}>
                            Get Started {hover ? <ArrowFoward /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>    
        </>
    )
}

export default HeroSection
