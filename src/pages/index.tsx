import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Content from '../components'
import Preloader from '../components/Preloader'

export default function Index() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return loading ? (
        <Preloader />
    ) : (
        <Layout>
            <Seo title="Home" />
            <Content />
        </Layout>
    )
}
