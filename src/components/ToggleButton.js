// ToggleButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = ({ onClick, isToggled }) => {
  return (
    <button onClick={onClick} className="toggle-button btn btn-primary">
      <FontAwesomeIcon icon={isToggled ? faToggleOn : faToggleOff} />
    </button>
  );
};

export default ToggleButton;
