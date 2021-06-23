import React from 'react'
import Icon1 from '../../img/svg-1.svg'
import Icon2 from '../../img/svg-1.svg'
import Icon3 from '../../img/svg-1.svg'

import {
    ServiceContainer,
    ServiceH1,ServiceWrapper,ServiceCard,ServiceIcon,ServiceH2,ServiceP
} from './ServiceComponents';
const Services = () => {
    return (
        <ServiceContainer id = "services">
            <ServiceH1>
                <ServiceWrapper>
                    <ServiceCard>
                        <ServiceIcon src={Icon1}/>
                        <ServiceH2>Taro Milk Tea</ServiceH2>
                        <ServiceP>Good Drink for the Day</ServiceP>
                    </ServiceCard>

                    <ServiceCard>
                        <ServiceIcon src={Icon2}/>
                        <ServiceH2>Honey Milk Tea</ServiceH2>
                        <ServiceP>Good Drink for the Day</ServiceP>
                    </ServiceCard>

                    <ServiceCard>
                        <ServiceIcon src={Icon3}/>
                        <ServiceH2>Brown Sugar Milk Tea</ServiceH2>
                        <ServiceP>Good Drink for the Day</ServiceP>
                    </ServiceCard>
                </ServiceWrapper>
            </ServiceH1>
        </ServiceContainer>
    )
}

export default Services
