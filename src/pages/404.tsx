import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { Heading } from '../components/theme'

const NotFoundPage = () => {
    React.useEffect(() => {
        setTimeout(() => {
            window.location.replace('/')
        }, 4000)
    }, [])
    return (
        <Layout>
            <Seo title="404: Not found" />
            <Heading>404 </Heading>
            <Heading>Awww.. Don't cry 🐣</Heading>
        </Layout>
    )
}

export default NotFoundPage
