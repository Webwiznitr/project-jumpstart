import React from 'react'
import styled from 'styled-components'

const LineComponent = styled.div`
    width: 10%;
    color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .line {
        height: 100%;
        border-right: 3px #ccc dashed;
    }
    .day {
        font-size: 3em;
        fill: #fff;
    }

    @media only screen and (max-width: 767px) {
        .hide-line {
            height: 0px;
            display: none;
        }
    }
`

const circleColors = [
    {
        start: '#0F6BF0',
        end: '#00E3DD',
    },
    {
        start: '#FF193D',
        end: '#FECF05',
    },
    {
        start: '#9600C7',
        end: '#FF007E',
    },
]

interface Props {
    oneSided: boolean
    day?: number
}

const Line: React.FC<Props> = ({ oneSided, day }) => {
    return (
        <LineComponent className="line-component">
            {oneSided ? (
                <>
                    <div className="line"> </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 108 108" fill="none">
                        <circle cx="54" cy="54" r="54" fill={`url(#paint${day - 1}_radial)`} />
                        <defs>
                            <radialGradient
                                id="paint0_radial"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(14 46) rotate(12.8833) scale(96.4274)"
                            >
                                <stop offset="0.0001" stop-color={circleColors[0].start} />
                                <stop offset="0.356203" stop-color={circleColors[0].start} />
                                <stop offset="1" stop-color={circleColors[0].end} />
                            </radialGradient>
                            <radialGradient
                                id="paint1_radial"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(14 46) rotate(12.8833) scale(96.4274)"
                            >
                                <stop offset="0.0001" stop-color={circleColors[1].start} />
                                <stop offset="0.356203" stop-color={circleColors[1].start} />
                                <stop offset="1" stop-color={circleColors[1].end} />
                            </radialGradient>
                            <radialGradient
                                id="paint2_radial"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(14 46) rotate(12.8833) scale(96.4274)"
                            >
                                <stop offset="0.0001" stop-color={circleColors[2].start} />
                                <stop offset="0.356203" stop-color={circleColors[2].start} />
                                <stop offset="1" stop-color={circleColors[2].end} />
                            </radialGradient>
                        </defs>
                        <text className="day" x="50%" y="50%" text-anchor="middle" stroke="#fff" strokeWidth="4px" dy=".3em">
                            {day}
                        </text>
                    </svg>
                </>
            ) : (
                <>
                    <div className="line hide-line"> </div>
                    <svg className="hide-line" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 34 34" fill="none">
                        <circle cx="17" cy="17" r="16" fill="#222222" stroke="#CCCCCC" stroke-width="4" />
                    </svg>
                    <div className="line hide-line"> </div>
                </>
            )}
        </LineComponent>
    )
}

export default Line
