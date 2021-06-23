import React, {useState} from 'react';
import {Modal} from '../Modal/Modal';
import {Link} from 'react-router-dom'
import {
    MenuSectionContainer,
    MenuSectionWrapper,
    MenuSectionTitle,
    HorizontalLineBottom,
    DrinkCard,
    DrinkImg,
    DrinkImgWrapper,
    DrinkInfo,
    DrinkTitle,
    DrinksWrapper,
    DrinkDesc,
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
                            console.log(product.modalDesc)
                            return (
                                <Link to={{
                                    pathname: '/drinks/' + product.path,
                                    state: {product: product},
                                  }} 
                                    style={{textDecoration: "none"}}>
                                    <DrinkCard key={index}>
                                        <DrinkImgWrapper>
                                            <DrinkImg src={product.img} alt={product.alt}/>
                                        </DrinkImgWrapper>
                                        
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