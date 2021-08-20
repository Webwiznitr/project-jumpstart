import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import styled from 'styled-components'
import '../layout.scss'

const AccessibilityContainer = styled.div`
    display: flex;
`

class Typeform extends React.Component {
    constructor(props) {
        super(props)
        this.openForm = this.openForm.bind(this)
    }

    openForm() {
        this.typeformEmbed.typeform.open()
    }

    render() {
        return (
            <div className="Accessibility">
                <ReactTypeformEmbed
                    popup
                    autoOpen={false}
                    url="https://hackodisha.typeform.com/jumpstart"
                    hideHeaders
                    hideFooter
                    buttonText="Go!"
                    style={{ top: 100, zIndex: -10 }}
                    ref={tf => {
                        this.typeformEmbed = tf
                    }}
                />
                <AccessibilityContainer>
                    <button onClick={this.openForm} className="register-btn">
                        Register Here
                    </button>
                </AccessibilityContainer>
            </div>
        )
    }
}

export default Typeform
