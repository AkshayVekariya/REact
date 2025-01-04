import React from 'react'
import Main from './Main/Main'
import Award from './Award/Award'
import { faBridge, faBriefcase, faChartBar, faGear, faLineChart, faMedal } from '@fortawesome/free-solid-svg-icons'
export default function Hero() {
  return (
      <>
      <Main />
      <div>
      <Award icon={faGear} heading={"3x Won Awards"} text={ "Vestibulum ante ipsum"} />
      <Award icon={faBriefcase} heading={"6.5k Faucibus"} text={ "Nullam quis ante"} />
      <Award icon={faLineChart} heading={"80k Mauris"} text={ "Etiam sit amet orci"} />
      <Award icon={faMedal} heading={"6x Phasellus"} text={ "Vestibulum ante ipsum"} />
      </div>
      </>
  )
}
