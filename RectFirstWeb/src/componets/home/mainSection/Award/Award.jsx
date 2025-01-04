import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faBriefcase,
  faChartBar,
  faMedal,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import './Award.css'

function Award(props) {
  return (
    <div className="main-award-section">
      <div className="main-inneraward-section">
        <div className="main-award-icon-info">
          <div className="fa-Trophy">
            <span><FontAwesomeIcon icon={props.icon} /></span>
            <div className="award-info">
              <h3>{ props.heading}</h3>
              <p> { props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;
