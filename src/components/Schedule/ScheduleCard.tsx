import React from 'react'
import styled from 'styled-components'
import Line from './line'

const ScheduleCardLayout = styled.article`
    margin: auto;
    width: 80%;
`

const SingleEvent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2px auto;
`

const LeftBox = styled.div`
    width: 30%;
    color: #fff;
    // background-color: #222;
    text-align: right;
    padding: 2em 0;
`

const RightBox = styled.div`
    width: 45%;
    color: #fff;
    // background-color: #222;
    text-align: left;
    padding: 2em 0;
`

function ScheduleCard(props) {
    return (
        <ScheduleCardLayout>
            <SingleEvent className="single-event">
                <LeftBox className="">
                    <span className="">{props.time}</span>
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
