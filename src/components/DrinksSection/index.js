import React, {useState} from 'react';
import {Modal} from '../Modal/Modal';
import {Link} from 'react-router-dom'
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

const DrinksSection = ({id, heading, data = []}) => {
    const [showModal, setShowModal] = useState(false)
    const [currentProduct, setCurrentProduct] = useState({})
    
    const openModal = (product) => {
        //onClick={() => openModal(product)}
        console.log(product)
        setCurrentProduct(product)
        setShowModal(!showModal)
    } 

    return (
            <MenuSectionContainer id={id}>
                <MenuSectionWrapper>
                    <MenuSectionTitle>{heading}</MenuSectionTitle>
                    <HorizontalLineBottom/>
                    <DrinksWrapper>
                        {data.map((product, index) => {
                            return (
                                <Link to={{
                                    pathname: '/drinks/' + product.id,
                                    state: {product: product},
                                  }} 
                                    style={{textDecoration: "none"}}>
                                    <DrinkCard key={index}>
                                        <DrinkImg src={product.img} alt={product.alt}/>
                                        <DrinkInfo>
                                            <DrinkTitle>{product.name}</DrinkTitle>
                                            <DrinkDesc>{product.desc}</DrinkDesc>
                                        </DrinkInfo>
                                    </DrinkCard>
                                </Link>
                            )
                        })
                        }
                    <Modal
                        showModal={showModal} 
                        setShowModal={openModal}
                        product={currentProduct}
                    />
                    </DrinksWrapper>
                </MenuSectionWrapper>
            </MenuSectionContainer>
    )
}

export default DrinksSection;