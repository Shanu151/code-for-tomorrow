// ViewToggle.js
import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const ViewToggle = ({ onToggle }) => {
  return (
    <ButtonGroup className="mb-2">
      <ToggleButton
        type="radio"
        variant="info"
        name="radio"
        value="card"
        onChange={() => onToggle("card")}
      >
        Card View
      </ToggleButton>
      <ToggleButton
        type="radio"
        variant="info"
        name="radio"
        value="list"
        onChange={() => onToggle("list")}
      >
        List View
      </ToggleButton>
    </ButtonGroup>
  );
};

export default ViewToggle;
