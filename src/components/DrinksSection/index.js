import React from 'react';
import SignatureDrinks from '../../img/signature.jpeg';
import {
    MenuSectionContainer,
    MenuSectionWrapper,
    MenuSectionRow,
    Column1,
    Column2,
    Column3,
    TextWrapper,
    ImgWrap,
    Img
} from './DrinksElements'

const DrinksSection = () => {
    return (
        <> 
            <MenuSectionContainer>
                <MenuSectionWrapper>
                    <p style={{color: 'black'}}>Top Drinks</p>
                    <MenuSectionRow>
                        <Column1>
                            <ImgWrap>
                            <Img src={SignatureDrinks} alt="Signature"/>
                            </ImgWrap>
                            <TextWrapper>
                                <p>Signature Milk Tea</p>
                            </TextWrapper>
                        </Column1>
                        <Column2>

                        </Column2>
                        <Column3>

                        </Column3>
                    </MenuSectionRow>
                </MenuSectionWrapper>
            </MenuSectionContainer>
        </>
    )
}

export default DrinksSection;