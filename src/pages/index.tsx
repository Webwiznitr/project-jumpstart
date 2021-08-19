import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Heading, Landing } from '../components/theme'
import Workshop from '../components/workshop'

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Landing>
            <Heading>Code.</Heading>
            <Heading className="gradient-text">Collaborate.</Heading>
            <Heading>Contribute.</Heading>
            <button className="register-btn">Register Here</button>
            <Workshop/>
        </Landing>
    </Layout>
)

export default IndexPage
