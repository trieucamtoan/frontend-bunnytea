import styled from 'styled-components';

export const LocationSectionContainer = styled.div`
    background-color: #fff;
    padding: 25px 0 50px 0;
    @media and (max-width: 768px){
        padding: 100px 0;
    }
`
export const LocationSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 100%;
    margin: auto 0; 
`
export const LocationSectionTitle = styled.div`
    color: #535353;
    font-family: 'Tauri', sans-serif;
    font-weight: bold;
    padding: 10px 0;
    font-size: 40px;
    font-style: normal;
    text-align: center;
`

export const HorizontalLineBottom = styled.span`
    border: none; 
    border-bottom: 3px solid gainsboro;
    margin-bottom: 50px;
    width: 65vw;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1628px){
        width: 90vw;
    }
`
export const LocationContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`
export const City = styled.div`
    font-size: 30px;
    font-family: 'Raleway', san-serif;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`
export const AddressTitle = styled.div`
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: 'Raleway', san-serif;
    text-align: center;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
`
export const Address = styled.div`
    font-size: 18px;
    // font-family: 'Arial', san-serif;
    text-align: center;
`
export const PhoneTitle = styled.div`
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: 'Raleway', san-serif;
    text-align: center;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
`

export const Phone = styled.div`
    font-size: 18px;
    // font-family: 'Arial', san-serif;
    text-align: center;
`

export const HoursInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const HoursInfoWrapperTitle = styled.div`
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: 'Raleway', san-serif;
    text-align: center;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
`

export const DayHoursWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const DayHoursWrapperColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto 20px;
`
// export const DaysWrapperColumn = styled.div`
//     display: flex;
//     flex-direction: column;
//     text-align: start;
// `
export const Day = styled.div`
    font-size: 18px;
    text-align: start;
`
// export const HoursWrapperColumn = styled.div`
//     display: flex;
//     flex-direction: column;
//     text-align: start;
// `
export const Hours = styled.div`
    font-size: 18px;
    text-align: start;
`