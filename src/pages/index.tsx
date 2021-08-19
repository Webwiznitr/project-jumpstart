import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { About, Heading, Landing, Partners, SubHeading } from '../components/theme'
import { Grid } from '@material-ui/core'
import Schedule from '../components/schedule'

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
            <SubHeading>Some cool subheading sochenge 🚀</SubHeading>
            <Schedule />
            <Partners>
                <h3>Some cool subheading sochenge</h3>
                <SubHeading>Some cool subheading sochenge</SubHeading>
                <div className="grid">
                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <img
                                className="grid_item"
                                src="https://res.cloudinary.com/webwiznitr/image/upload/v1628961683/Assets/Sponsors/GitHub_Logo_White_lmfoza.png"
                                alt="logo"
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <img
                                className="grid_item"
                                src="https://res.cloudinary.com/webwiznitr/image/upload/v1628961683/Assets/Sponsors/GitHub_Logo_White_lmfoza.png"
                                alt="logo"
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <img
                                className="grid_item"
                                src="https://res.cloudinary.com/webwiznitr/image/upload/v1628961683/Assets/Sponsors/GitHub_Logo_White_lmfoza.png"
                                alt="logo"
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <img
                                className="grid_item"
                                src="https://res.cloudinary.com/webwiznitr/image/upload/v1628961683/Assets/Sponsors/GitHub_Logo_White_lmfoza.png"
                                alt="logo"
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <img
                                className="grid_item"
                                src="https://res.cloudinary.com/webwiznitr/image/upload/v1628961683/Assets/Sponsors/GitHub_Logo_White_lmfoza.png"
                                alt="logo"
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <img
                                className="grid_item"
                                src="https://res.cloudinary.com/webwiznitr/image/upload/v1628961683/Assets/Sponsors/GitHub_Logo_White_lmfoza.png"
                                alt="logo"
                            />
                        </Grid>
                    </Grid>
                </div>
            </Partners>
        </Landing>
    </Layout>
)

export default IndexPage
