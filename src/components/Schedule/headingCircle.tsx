import React from 'react'
import styled from 'styled-components'
import Line from './line'

const LeftBox = styled.div`
    width: 30%;
    color: #fff;
    text-align: right;
    padding: 2em 0;
`

const RightBox = styled.div`
    width: 45%;
    color: #fff;
    text-align: left;
    padding: 2em 0;
`

const HeadingLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: center;
    margin: auto;
`

interface Props {
    day: number;
}

const HeadingCircle: React.FC<Props> = ({ day }) => {
    return (
        <HeadingLayout>
            <LeftBox />
            <Line day={day} oneSided={true} />
            <RightBox />
        </HeadingLayout>
    )
}

export default HeadingCircle
