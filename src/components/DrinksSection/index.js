import React from 'react';
import {
    MenuSectionContainer,
    MenuSectionWrapper,
    MenuSectionTitle,
    HorizontalLineTop,
    HorizontalLineBottom,
    DrinkCard,
    EmptyDrinkCard,
    DrinkHeading,
    DrinkImg,
    DrinkInfo,
    DrinkTitle,
    DrinksWrapper,
    MenuSectionRow,
    Column1,
    Column2,
    Column3,
    Column4,
    TextWrapper,
    ImgWrap,
    Img,
    DrinksCollection,
    DrinkDesc
} from './DrinksElements'

const DrinksSection = ({heading, data = []}) => {
    return (
            <MenuSectionContainer>
                <MenuSectionWrapper>
                    <MenuSectionTitle>{heading}</MenuSectionTitle>
                    <HorizontalLineBottom/>
                    <DrinksWrapper>
                        {data.map((product, index) => {
                            return (
                                <DrinkCard key={index}>
                                    <DrinkImg src={product.img} alt={product.alt}/>
                                    <DrinkInfo>
                                        <DrinkTitle>{product.name}</DrinkTitle>
                                        <DrinkDesc>{product.desc}</DrinkDesc>
                                    </DrinkInfo>
                                </DrinkCard>
                            )
                        })
                        }
                    </DrinksWrapper>
                </MenuSectionWrapper>
            </MenuSectionContainer>
    )
}

export default DrinksSection;