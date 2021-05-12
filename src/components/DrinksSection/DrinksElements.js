import styled from 'styled-components'

export const MenuSectionContainer = styled.div`
    color: #fff;

    @media and (max-width: 768px){
        padding: 100px 0;
    }
`

export const MenuSectionWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const MenuSectionRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2 col3';

    // @media screen and (max-width: 768px){
    //     grid-template-areas: 'col1 col1' 'col2 col2';
    // }
`

export const Column1 = styled.div`
    margin-bottom: 40px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 40px;
    padding: 0 15px;
    grid-area: col2;
`
export const Column3 = styled.div`
    margin-bottom: 40px;
    padding: 0 15px;
    grid-area: col3;
`

export const TextWrapper = styled.div`
    max-width: 230px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 200px;
    height: 250px;
    margin: 0 0 10px 0 ;
    padding-right: 0;
`