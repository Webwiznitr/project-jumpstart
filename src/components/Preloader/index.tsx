import React from 'react'
import styled from 'styled-components'
import { Heading } from '../theme'

const Loader = styled.img`
    height: 110%;
    width: 110%;
`

function Preloader() {
    return <Loader src="https://user-images.githubusercontent.com/6901805/58038897-167f0280-7ae6-11e9-94eb-88e880a25f0f.gif" />
}

export default Preloader
