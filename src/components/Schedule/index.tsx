import React from 'react'
import { Day1, Day2, Day3 } from './ScheduleData'
import ScheduleCard from './ScheduleCard'
import { SubHeading } from '../theme'
import HeadingCircle from './headingCircle'

function card1(Day1) {
    return <ScheduleCard key={Day1.id} time={Day1.time} date={Day1.date} title={Day1.title} subtitle={Day1.subtitle} />
}
function card2(Day2) {
    return <ScheduleCard key={Day2.id} time={Day2.time} date={Day2.date} title={Day2.title} subtitle={Day2.subtitle} />
}

function card3(Day3) {
    return <ScheduleCard key={Day3.id} time={Day3.time} date={Day3.date} title={Day3.title} subtitle={Day3.subtitle} />
}

function Schedule() {
    return (
        <div className="container-schedule">
            <SubHeading>Some cool subheading sochenge 🚀</SubHeading>
            <section className="content-section">
                <div className="contents">
                    <div id="day1" className="daily-schedule">
                        <HeadingCircle day={1} date={Day1[0].date} />
                        {Day1.map(card1)}
                        <HeadingCircle day={2} date={Day2[0].date} />
                        {Day2.map(card2)}
                        <HeadingCircle day={3} date={Day3[0].date} />
                        {Day3.map(card3)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Schedule
