import React from 'react'
import { Heading } from '../theme'
import Typeform from './typeform'

export default function () {
    return (
        <div id="home">
            <Heading>Code.</Heading>
            <Heading className="gradient-text">Collaborate.</Heading>
            <Heading>Contribute.</Heading>
            <Typeform />
        </div>
    )
}
