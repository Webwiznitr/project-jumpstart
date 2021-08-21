import styled from 'styled-components'

export const Heading = styled.h1`
    font-size:9vw;
    color: #fff;
    font-weight: 800;

    @media only screen and (max-width: 480px) {
        font-size: 13vw;
    }
`

export const Landing = styled.div`
    margin: 3rem auto;
    text-align: center;
`
export const About = styled.p`
    color: grey;
    font-size: 1.3rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    margin: 5% auto;
    text-align: justify;
    width: 70%;

    @media only screen and (max-width: 767px) {
        width: 80%;
    }
`
export const Partners = styled.div``

export const SubHeading = styled.h3`
    color: #fff;
    font-weight: 700;
`
