import React from 'react'
import {
    DrinkWrapper,
    Content,
    InfoWrapper,
    ImgWrapper,
    Img,
    Title,
    TitleDescWrapper,
    ButtonWrapper,
    DescriptionTitle,
    Description,
    Button
} from './DrinkItemElement'

const DrinkItem = ({product}) => {
    return (
        <div>
            <DrinkWrapper>
                <Content>
                    <ImgWrapper>
                        <Img src={product.img} alt={product.alt} />
                    </ImgWrapper>
                    <InfoWrapper>
                        <TitleDescWrapper>
                            <Title>{product.name}</Title>
                            <DescriptionTitle>Description</DescriptionTitle>
                            <Description>{product.desc}</Description>
                            <Description style={{fontSize: '13px', textTransform: 'uppercase', fontWeight: '600'}}>{product.modalDesc}</Description>
                        </TitleDescWrapper>
                    </InfoWrapper>
                    <ButtonWrapper>
                            <Button to="/">
                                    Go Back
                            </Button>
                    </ButtonWrapper>
                    
                </Content>
            </DrinkWrapper>
        </div>
    )
}

export default DrinkItem
