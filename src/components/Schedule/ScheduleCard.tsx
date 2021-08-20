import React from 'react'
import styled from 'styled-components'
import Line from './line'

const ScheduleCardLayout = styled.article`
    margin: 0 auto;
    font-size: inherit;
`

const SingleEvent = styled.div`
    display: flex;
    height: 180px;
    flex-direction: row;
    justify-content: center;
    margin: 2px auto;

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        background-color: #222;
        width: 70%;
        border-radius: 1em;
        margin: 2em auto;
        position: relative;
        padding: 1em;

        &::before {
            content: '';
            height: 100px;
            position: absolute;
            right: 50%;
            border-right: 2px #ccc dashed;
            top: -100px;
            z-index: -1;
        }
    }
`

const LeftBox = styled.div`
    width: 30%;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // background-color: #222;
    padding: 2em 0;

    @media only screen and (max-width: 767px) {
        justify-content: center;
        padding: 0.8em 0;
    }
`

const RightBox = styled.div`
    width: 45%;
    color: #fff;
    display: flex;
    flex-direction: column;
    // background-color: #222;
    text-align: left;
    padding: 2em 0;
    font-size: inherit;
    align-items: flex-start;
    justify-content: center;


    @media only screen and (max-width: 767px) {
        justify-content: center;
        width: 100%;
        text-align: center;
        align-items: center;
        margin: 0 auto;
        padding: 0.8em 0;

        .details {
            margin: 0 auto;
        }
    }
`

function ScheduleCard(props) {
    return (
        <ScheduleCardLayout>
            <SingleEvent className="single-event">
                <LeftBox className="date-time">
                    <span className="time">{props.time}</span>
                </LeftBox>
                <Line oneSided={false} />
                <RightBox className="">
                    <div className="speaker">
                        {' '}
                        <div className="details">
                            <span className="title">{props.title}</span>
                            <span className="subtitle">{props.subtitle}</span>
                            <span className="name"></span>
                        </div>
                    </div>
                </RightBox>
            </SingleEvent>
        </ScheduleCardLayout>
    )
}

export default ScheduleCard
