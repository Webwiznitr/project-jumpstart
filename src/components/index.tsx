import React, { useState, useEffect } from 'react'
import Schedule from './Schedule'
import Hero from './Hero'
import About from './About'
import Partners from './Partners'

export default function index() {
    return (
        <div>
            <Hero />
            <About />
            <Schedule />
            <Partners />
        </div>
    )
}
