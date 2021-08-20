import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Accessibility from './accessibility'
import { NavLinks } from './navLinks'
import { MobileNavLinks } from './mobileNavLinks'

const NavbarContainer = styled.header`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #242526;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

const LeftSection = styled.div`
    display: flex;
`

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
    font-size: 1rem;
`

const RightSection = styled.div`
    display: flex;
`

const LogoText = styled.h1`
    color: #fff;
    padding-top: 1.5rem;
    font-size: 1.5rem;
    padding-left: 1.5rem;
`

export function Navbar(props) {
    const isMobile = useMediaQuery({ maxWidth: '992px' })

    return (
        <NavbarContainer>
            <LeftSection>
                <a href="/" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <LogoText>
                        Jumpstart<span style={{ color: '#93ff00' }}>.</span>
                    </LogoText>
                </a>
            </LeftSection>
            <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
            <RightSection>
                {!isMobile && <Accessibility />}
                {isMobile && <MobileNavLinks />}
            </RightSection>
        </NavbarContainer>
    )
}
