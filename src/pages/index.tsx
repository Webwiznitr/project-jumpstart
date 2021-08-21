import React, { useEffect, useState } from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Content from '../components'
import Preloader from '../components/Preloader'

export default function Index() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
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
            <MessengerCustomerChat 
                pageId="" 
                appId="" 
                themeColor="#b20000" 
                />
        </Layout>
    )
}
