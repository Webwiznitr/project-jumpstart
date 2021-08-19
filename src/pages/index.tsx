import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { About, Heading, Landing, Partners, SubHeading } from '../components/theme'
import Workshop from '../components/workshop'
import { Grid } from 'gatsby-plugin-material-ui'

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Landing>
            <Heading>Code.</Heading>
            <Heading className="gradient-text">Collaborate.</Heading>
            <Heading>Contribute.</Heading>
            <button className="register-btn">Register Here</button>
            <About>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In
                publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </About>
            <Partners>
                <h3>Some cool subheading sochenge</h3>
                <SubHeading>Some cool subheading sochenge</SubHeading>
            </Partners>
        </Landing>
    </Layout>
)

export default IndexPage
