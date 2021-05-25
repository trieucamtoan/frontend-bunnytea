import React from 'react'
import {
    LocationSectionContainer,
    LocationSectionWrapper,
    LocationSectionTitle,
    HorizontalLineBottom,
    LocationContentWrapper,
    City,
    // AddressTitle,
    PhoneTitle,
    Phone,
    HoursInfoWrapperTitle,
    HoursInfoWrapper,
    Day,
    DayHoursWrapper,
    DayHoursWrapperColumn,
    Address,
    Hours,
    AddressTitle
    

} from './LocationElements';


const LocationSection = ({id, location, address, phone, hours}) => {
    return (
            <LocationSectionContainer id={id}>
                <LocationSectionWrapper>
                    <LocationSectionTitle>LOCATION</LocationSectionTitle>
                    <HorizontalLineBottom/>
                    <LocationContentWrapper>
                        <City>{location}</City>
                        <AddressTitle>
                            Address
                            
                        </AddressTitle>
                        <Address>{address}</Address>
                        <PhoneTitle>PHONE</PhoneTitle>
                        <Phone>{phone}</Phone>
                        <HoursInfoWrapper>
                            <HoursInfoWrapperTitle>HOURS</HoursInfoWrapperTitle>
                            <DayHoursWrapper>
                                {hours.map((key,index) => {
                                    return (<DayHoursWrapperColumn key ={index}>
                                        <Day>{key.day}</Day>
                                        <Hours>{key.hour}</Hours>
                                    </DayHoursWrapperColumn>)
                                })}
                            </DayHoursWrapper>
                        </HoursInfoWrapper>
                    </LocationContentWrapper>
                    {/* {data.map((product, index) => {
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
                    } */}
                </LocationSectionWrapper>
            </LocationSectionContainer>
    )
}

export default LocationSection
