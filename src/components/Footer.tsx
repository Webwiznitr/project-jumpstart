import React from 'react'

export default function Footer() {
    return (
        <footer
            style={{
                marginTop: `2rem`,
                color: '#ffffff',
            }}
        >
            © {new Date().getFullYear()}, Built with
            {` `}
            Love
        </footer>
    )
}
