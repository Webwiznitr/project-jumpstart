import React from 'react'
import styled from 'styled-components'
import Line from './line'

const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .date-container {
        margin: 4em 0;
        .heading-date {
            font-size: 400%;
            color: #fff;
            font-weight: 700;
        }
    }

    @media only screen and (max-width: 767px) {
        .date-container {
            margin: 2em 0;
            .heading-date {
                font-size: 250%;
                color: #fff;
                font-weight: 700;
            }
        }
    }
`

const LeftBox = styled.div`
    width: 10%;
    color: #fff;
    text-align: right;
    padding: 2em 0;

    @media only screen and (max-width: 767px) {
        width: 15%;
    }
`

const RightBox = styled.div`
    width: 25%;
    color: #fff;
    text-align: left;
    padding: 2em 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 767px) {
        width: 15%;
    }
`

const HeadingLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
`

interface Props {
    day: number
    date: string
}

const HeadingCircle: React.FC<Props> = ({ day, date }) => {
    return (
        <HeadingLayout>
            <LeftBox />
            <CenterBox>
                <Line day={day} oneSided={true} />
                <div className="date-container">
                    <span className="heading-date">{date}</span>
                </div>
            </CenterBox>

            <RightBox />
        </HeadingLayout>
    )
}

export default HeadingCircle
