import styled from 'styled-components'

//Styling background
export const MenuSectionContainer = styled.div`
    background-color: #fff;
    padding: 25px 0;
    @media and (max-width: 768px){
        padding: 100px 0;
    }
`

export const MenuSectionWrapper = styled.div`
    display: grid;
    z-index: 1;
    margin: 0; 
    
`
export const MenuSectionTitle = styled.div`
    color: #535353;
    padding: 30px 0;
    font-family: 'Tauri', sans-serif;
    font-weight: bold;
    font-size: 40px;
    font-style: normal;
    text-align: center;

    @media and screen (max-width: 480px){
        font-size: 2vw;
    }
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

export const HorizontalLineTop = styled.span`
    border: none; 
    border-bottom: 3px solid gainsboro;
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (max-width: 1500px){
        width: 70vw;
    }
`

export const DrinksWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-gap: 4rem 2rem;


    @media (min-width: 480px){
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1000px){
        grid-template-columns: repeat(3, 1fr);
    }

    // @media (min-width: 1200px){
    //     grid-template-columns: repeat(4, 1fr);
    // }

`

export const DrinkCard = styled.div`
    margin: 0 auto;
    width: 80vw;
    @media (min-width: 768px){
        width: 40vw; 
    }

    @media (min-width: 1000px){
        width: 28vw; 
    }

    @media (min-width: 1620px){
        width: 20vw; 
    }

`
export const DrinkImg = styled.img`
    height: 95vw;
    width: 80vw;
    pointer-events: none;
    -webkit-user-select: none;
    @media (min-width: 768px){
        width: 40vw; 
        height: 45vw;
    }

    @media (min-width: 1000px){
        width: 25vw; 
        height: 30vw;
    }

    @media (min-width: 1620px){
        width: 20vw; 
        height: 25vw;
    }

    
`
export const DrinkHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`
export const DrinkInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`
export const DrinkDesc = styled.div`
    color: black;
    font-family: 'Raleway', san-serif;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    // text-transform: uppercase;
`
export const DrinkTitle = styled.h1`
    color: black;
    font-family: 'Raleway', san-serif;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
`

export const MenuSectionRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2 col3 col4';

    @media screen and (max-width: 1200px){
        grid-template-areas: 
            'col1 col1 col2 col2' 
            'col3 col3 col4 col4';
    }

    @media screen and (max-width: 768px){
    grid-template-areas: 
        'col1 col1 col1 col1' 
        'col2 col2 col2 col2' 
        'col3 col3 col3 col3'
        'col4 col4 col4 col4';
    }
`

export const Column1 = styled.div`
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
    grid-area: col1;

`

export const Column2 = styled.div`
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
    grid-area: col2;


`
export const Column3 = styled.div`
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
    grid-area: col3;
`

export const Column4 = styled.div`
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
    grid-area: col4;
`

export const TextWrapper = styled.div`
    width: auto;
    height: auto;
    text-align: center;
`

export const ImgWrap = styled.div`
    width: 200px;
    height: 230px;
    padding: 0 40px;

    @media screen and (max-width: 1200px){
        width: 300px;
        height: 350px;
    }

    @media screen and (max-width: 768px){
        width: 400px;
        height: 450px;
    }

    @media screen and (max-width: 480px){
        width: 80vw;
        height: 90vw;
    }

    @media screen and (max-width: 268px){
        padding: 0 10px;
    }
`

export const Img = styled.img`
    border-radius: 27px;
    display: inline-block;
    justify-content:center;
    display: block;
    margin: 0 0 10px 0;

    
`