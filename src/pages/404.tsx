import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { Heading, SubHeading } from '../components/theme'

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <Heading>404 </Heading>
        <Heading>Awww.. Don't cry 🐣</Heading>
    </Layout>
)

export default NotFoundPage
