import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header/header'
import './layout.scss'
import Footer from './Footer/Footer'
import { Landing } from './theme'
import { Navbar } from './Header'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <div>
                <Navbar />
                <Landing>
                    <main>{children}</main>
                    <Footer />
                </Landing>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
