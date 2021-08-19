import React from 'react'

export default function Footer() {
    return (
        <footer
            style={{
                marginTop: `2rem`,
                color: '#ffffff',
                textAlign:'center'
            }}
        >
            Jumpstart © {new Date().getFullYear()}, Built with
            {` `}
            &hearts;
        </footer>
    )
}
